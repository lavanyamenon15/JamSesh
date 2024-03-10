import React from 'react';
import '../css/JamWidget.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/Chat.css';
import Message from './Message.js';

function Chat() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textMonitor, setTextMonitor] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the input value state
    };
    const [aiMonitor, setAIMonitor] = useState(false)
    const filler = "                                                                                            "

    // set up cohere client 
    const { CohereClient } = require("cohere-ai");
    const cohere = new CohereClient({
        token: "IQZYFNERBlilMCbkrc9R0rOb6f6Zx5z9R4LBARbC",
    });

    const toggleAIMonitor = () => {
        setAIMonitor(!aiMonitor);
        console.log("AI MONITOR:" , aiMonitor, " characters = ", textMonitor.length, " string = ", textMonitor)
    };

    // loads message data 
    const getData = async () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        }

        try {
            const response = await fetch("http://localhost:3030/Chat", requestOptions);
            const result = await response.json();
            setData(result)
            setLoading(false);
            console.log(result);
        } catch(e) {
            console.error("Error", e);
            setLoading(false);
        }
    }

    // creates new mainUserMessages
    const newMessage = async () => {

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "me",
                text: inputValue,
                mainUser: "true"
            })
        }

        try {
            const response = await fetch("http://localhost:3030/Chat", requestOptions); // make post request 
            const result = await response.json(); 
            setTextMonitor(String(textMonitor) + String(result.text));
            generateFakeUserMessages(inputValue); // generate fake messages using cohere chat bot 
            data.push(result) // update the data locally to get it to show up faster 
            setData([...data]);
            setInputValue('');
            setLoading(false);
            console.log(result);
        } catch(e) {
            console.error("Error", e);
            setLoading(false);
        }
    }

    // generates fake messages to simulate a 'jam sesh' conversation between a group of people 
    const generateFakeUserMessages = async (messageFromMainUser) => {
        var returnVal = (async () => {
            const chatStream = await cohere.chatStream({
                chatHistory: [], // start w/empty chat history 
                message: "respond as if you are my friend (give a short response) : " + messageFromMainUser,
                // perform web search before answering the question. You can also use your own custom connector.
                connectors: [{ id: "web-search" }],
            });

            var accumulativeMsg = '';
        
            for await (const message of chatStream) {
                if (message.eventType === "text-generation") {
                    // console.log(message);
                    accumulativeMsg += message.text;
                }
            }
            console.log(accumulativeMsg);
            return accumulativeMsg;
            })();


        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "Sarah",
                text: await returnVal,
                mainUser: "false"
            })
        }

        const response = await fetch("http://localhost:3030/Chat", requestOptions);
        const result = await response.json();
        setTextMonitor(String(textMonitor) + String(result.text));
        setData([...data, result]);
    }

    // summarizing and generating 
    const summarizeAndGenerate = async () => {
        const summarizeResponse = await cohere.summarize({
            text: textMonitor,
            model: "command",
            additionalCommand: "",
            temperature: 0.3,
        });

        const summary = summarizeResponse.results?.[0].summary

        const generateResponse = await cohere.generate({
            model: "command",
            prompt: "give me one short idea for our group that is talking about: " + summary,
            maxTokens: 300,
            temperature: 0.9,
            k: 0,
            stopSequences: [],
            returnLikelihoods: "NONE"
        });
        // console.log(`Prediction: ${response.generations[0].text}`);

        // console.log(`Summary: ${response.results?.[0].summary}`);

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "Jammy (your personal AI assistant)",
                text: generateResponse.generations[0].text,
                mainUser: "false"
            })
        }

        const generateIdeaMessage = await fetch("http://localhost:3030/Chat", requestOptions);
        const ideaMessage = await generateIdeaMessage.json();
        setData([...data, ideaMessage]);
    }

    useEffect(() => {
        getData();
    }, [loading]);


    if (loading) {
        return <div> <p> Loading ... </p></div>
    }

    if(textMonitor.length > 500 && aiMonitor == true){
        summarizeAndGenerate();
        setTextMonitor('');
    }
    
    return (
        <div>
        <div className='container'>
            <div className='chatWindow'>
                {
                    data.map((message) => (
                        <Message
                        message={message.text} 
                        mainUser={message.mainUser} 
                        name={message.name}
                        ></Message>
                    ))
                }
            </div>
            <input 
                className='textToSend'
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Send new message ..."
            /> 
            <button className='sendButton' onClick={newMessage}></button> 
            <button className='aiEnhance' onClick={toggleAIMonitor}> Get Help from Jammy </button>
        </div>
        </div>
    );
}

export default Chat;
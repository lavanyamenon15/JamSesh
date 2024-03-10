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

    // set up cohere client 
    const { CohereClient } = require("cohere-ai");
    const cohere = new CohereClient({
        token: "IQZYFNERBlilMCbkrc9R0rOb6f6Zx5z9R4LBARbC",
    });

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
            setTextMonitor(textMonitor + result);
            generateFakeUserMessages(inputValue); // generate fake messages using cohere chat bot 
            data.push(result) // update the data locally to get it to show up faster 
            setData([...data]);
            setInputValue('');
            // const msg = {
            //     name: "me",
            //     text: fakemsg,
            //     mainUser: "true"
            // }
            // setData([...data, msg]);
            // console.log(msg);
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
        setTextMonitor(textMonitor + result);
        setData([...data, result]);
    }

    // summarizing and generating 

    useEffect(() => {
        getData();
    }, [loading]);


    if (loading) {
        return <div> <p> Loading ... </p></div>
    }

    if(textMonitor.length > 510){

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
            <button className='aiEnhance' onClick={newMessage}> Get Help from Jammy </button>
        </div>
        </div>
    );
}

export default Chat;
import React from 'react';
import '../css/JamWidget.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/Chat.css';
import Message from './Message.js';

function Chat() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getData();
    }, [loading]);

    if (loading) {
        return <div> <p> Loading ... </p></div>
    }
    
    return (
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
                <input className='textToSend'></input> <button className='sendButton'></button>
            </div>
        </div>
    );
}

export default Chat;
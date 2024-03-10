import React from 'react';
import '../css/MessageBubble.css'

function Message({message, mainUser, name}) {
    if (mainUser == "true") {
        return <div className='messageContainerRight'>
            <div className='mainUser'>
                <p className='messageName'> {name} </p>
                <p className='message'> {message} </p>
            </div>
        </div>
    }
    
    return (
        <div>
            <p className='messageName'> {name} </p>
            <div className='messageContainerLeft'>
                <div className='notMainUser'>
                    <p className='message'> {message} </p>
                </div>
            </div>
        </div>
    );
}

export default Message;
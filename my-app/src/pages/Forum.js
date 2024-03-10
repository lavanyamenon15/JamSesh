import React from 'react';
import NavBar from '../components/NavBar';
import Message from '../components/Message';

function Forum() {
    
    return (
        <div>
            <NavBar></NavBar>
            <Message
            message='Hi! my name is Lavanya' 
            mainUser='true'
            name='Lava'
            ></Message>
        </div>
    );
}

export default Forum;
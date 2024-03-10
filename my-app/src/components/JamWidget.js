import React from 'react';
import '../css/JamWidget.css'

function JamWidget({jamName, location, members, tags}) {
    
    return (
        <div className='jamWidget'>
            <h1 className='jamName'>{jamName} </h1>
            <p className='jamLocation'> {location} </p>
            <p className='jamMembers'> {members} </p>
            <p className='jamTags'> {tags} </p>
        </div>
    );
}

export default JamWidget;
import React from 'react';

function JamWidget({key, jamName, location, members, tags}) {
    
    return (
        <div className='jamWidget'>
            <h1 className='jamName'>{jamName} </h1>
            <p className='jamLocation'> {location} </p>
            <p className='jamMembers'> {members} </p>
        </div>
    );
}

export default JamWidget;
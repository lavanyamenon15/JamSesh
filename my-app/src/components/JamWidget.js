import React from 'react';
import '../css/JamWidget.css'
import { Link } from 'react-router-dom';

function JamWidget({id, jamName, location, members, tags}) {
    
    return (
        <div className='jamWidget'>
            <h1 className='jamName'>{jamName} </h1>
            <p className='jamLocation'> {location} </p>
            <p className='jamMembers'> Number of Jam Members: {members} </p>
            <p className='jamTags'> {tags} </p>
            <Link to={'/jams/' + id }><button className='jamButton'> Take me to the jam!</button></Link>
        </div>
    );
}

export default JamWidget;
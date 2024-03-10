import React from 'react';
import '../css/JamWidget.css'
import { Link } from 'react-router-dom';

function JamWidget({id, jamName, location, members, tags}) {
    
    return (
        <div className='jamWidget'>
            <div className='content'>
            <h1 className='jamName'>{jamName} </h1>
            <p className='jamLocation'> Location:&nbsp;{location} </p>
            <p className='jamMembers'> # of Jam Members:&nbsp;{members} </p>
            <div className='jamTags'>
        {tags.map((tag, index) => (
            <p className="jamT" key={index}>#{tag}</p>
        ))}
    </div>
    </div>
            <Link to={'/jams/' + id }><button className='jamButton'> Take me to the jam!</button></Link>
        </div>
    );
}

export default JamWidget;
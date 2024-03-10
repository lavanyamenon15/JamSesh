import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    
    return (
        <div className='navBar'>
            <button className='navButton'><Link to={"/home"}> Home </Link></button>
            <button className='navButton'><Link to={"/jams"}> Jams </Link></button>
            <button className='navButton'><Link to={"/forum"}> Jam Forum </Link></button>
        </div>
    );
}

export default NavBar;
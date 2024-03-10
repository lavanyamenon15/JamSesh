import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    
    return (
        <div className='navBar'>
            <button className='navButton'><Link class="a" to={"/home"}> Home </Link></button>
            <button className='navButton'><Link class="a" to={"/jams"}> Jams </Link></button>
        </div>
    );
}

export default NavBar;
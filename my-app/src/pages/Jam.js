import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import JamWidget from '../components/JamWidget';
import { useState } from 'react';
import Chat from '../components/Chat';
import './Jam.css';

function Jam() {  

    
    return (
        <div class="main">
            <NavBar></NavBar>
            <h1 class="title_block"> CyberTech Jam</h1>
            <div class="mainRow"> 
            <div class="inside">
            <div className = "left_block">
                <div class="heading">Locations:</div>
                <div class="heading"> Tags:</div>
                <div class="heading">Description:</div>
                <div class="heading">Members:</div>
            </div>

            <div className="middle_block">
                <div class="location_text">Vancouver</div>
                <div class= "tags_text">#cyber #security #technology #coding</div>
                <div class="description_text">This platform is for cyber security lovers. Ideas, projects, and more!</div>
                <div class= "member_text">
                    <p class="member-design">Smriti </p>
                    <p class="member-design">My Lan </p>
                    <p class="member-design">Lavanya </p>
                    <p class="member-design">Eknoor </p>
                    </div>
            </div>
            </div>

            <Chat></Chat>
            </div>

        </div>
    );
}

export default Jam;
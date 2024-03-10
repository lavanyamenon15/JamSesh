import React from 'react';
import NavBar from '../components/NavBar';
import './Jam.css';

function Jam() {
    
    return (
        <div class="main">
            <NavBar></NavBar>
            <h1 class="title_block"> CyberTech Jam</h1>
            <div className = "left_block">
                <div class="heading">Locations:</div>
                <div class="heading"> Tags:</div>
                <div class="heading">Description:</div>
                <div class="heading">Members: </div>
            </div>

            <div className="middle_block">
                <div class="location_text">Vancouver<br /> </div>
                <div class= "tags_text">#cyber #security #technology #coding</div>
                <div class="description_text">This platform is for cyber security lovers!</div>
                <div class= "member_text">Christine <br /> Jack <br />Alan<br /></div>
            </div>


        </div>
    );
}

export default Jam;
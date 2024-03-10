import React from 'react';
import '../css/Home.css'


import NavBar from '../components/NavBar';


function Home() {
    return (
        <div class="main">
            <NavBar></NavBar>
            <h1 class="head"> Welcome to JAM SESH!</h1>
            <div class="textbox"><p class="p"> Here, creativity knows no bounds. Whether you're passionate about tech, art, or anything in between, our platform offers a space for sharing and collaborating on project ideas. From coding to crafting, ignite your imagination and connect with like-minded individuals on dedicated topic boards. Join us and let's jam!</p></div>
            
        </div>
    );
}

export default Home;
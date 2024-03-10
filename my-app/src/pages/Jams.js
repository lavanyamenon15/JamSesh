import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import JamWidget from '../components/JamWidget';
import { useState } from 'react';
import '../css/JamWidget.css'

function Jams() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        }

        try {
            const response = await fetch("http://localhost:3030/ActiveJams", requestOptions);
            const result = await response.json();
            setData(result)
            setLoading(false);
            console.log(result);
        } catch(e) {
            console.error("Error", e);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [loading]);

    if (loading) {
        return <div> <p> Loading ... </p></div>
    }

    return (
        <div>
            <NavBar></NavBar>
            {data.map((jam) => (
                <JamWidget
                key={jam.id}
                id={jam.id}
                jamName={jam.name} 
                location={jam.location} 
                members={jam.members.length} 
                tags={jam.tags}>
                </JamWidget>
            ))}
        </div>
    );
}

export default Jams;
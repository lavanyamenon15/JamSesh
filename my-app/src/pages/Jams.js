import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import JamWidget from '../components/JamWidget';
import { useState } from 'react';
import '../css/JamWidget.css'

function Jams() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        location: " ",
        tags: " ",
      });
    
      // Function to handle form input changes
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Function to handle form submission
      const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form validation or submit the form data here
        getData();
        console.log('Form submitted:', formData);

      };

    const filterByLocation = (jams) => {
        if(formData.location != " "){
            var newJamsList = []
            jams.forEach(element => {
                if(element.location == formData.location){
                    newJamsList.push(element);
                }
            });
            return newJamsList;
        } else {
            return jams;
        }
    }

    const filterByTags = (jams) => {
        if(formData.tags != " "){
            var newJamsList = []
            jams.forEach(element => {
                console.log(element)
                if(element.tags.includes(formData.tags)){
                    newJamsList.push(element);
                }
            });
            console.log(newJamsList);
            return newJamsList;
        } else {
            return jams;
        }
    }

    const getData = async () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        }

        try {
            const response = await fetch("http://localhost:3030/ActiveJams", requestOptions);
            var result = await response.json();
            result = await filterByLocation(result);
            result = await filterByTags(result);
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
        <div><NavBar></NavBar>
        <div className='bigBoard'>
        <div className='filter'> 
            <form onSubmit={handleSubmit}>
            <label>
                <h3> Location: </h3>
                <select
                className='location'
                type="select"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                >
                    <option value=" ">Select Option</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Toronto">Toronto</option>
                </select>
            </label>
            <label>
                <h3> Tags: </h3>
                <select
                className='tags'
                type="select"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                required
                >
                    <option value=" ">Select Option</option>
                    <option value="TECH">Technoloogy</option>
                    <option value="FILM">Film</option>
                    <option value="BOTANY">Botany</option>
                    <option value="MUSIC">Music</option>
                    <option value="EDITING">Editing</option>
                    <option value="MOVIE">Movie</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
        <div class="jamBoard">
            {data.map((jam) => (
                <JamWidget
                key={jam.id}
                jamName={jam.name} 
                location={jam.location} 
                members={jam.members.length} 
                tags={jam.tags}>
                </JamWidget>
            ))}
        </div>
        </div>
        </div>
    );
}

export default Jams;
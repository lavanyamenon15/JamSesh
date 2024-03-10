
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const Loginmanagement = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div> 
      <div class = "container">
      <p className='Title'>Jam Sesh</p>
      <p className='Subtitle'> Infinite Ideas      One Place</p>
      </div>
      <div class = "container2">
      <form onSubmit={Loginmanagement}>
        <label className='label_design'>
          Username:
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className='label_design'>
          Password:
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <div>
          <Link to={'/home'}> <button type="submit">Login</button></Link>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
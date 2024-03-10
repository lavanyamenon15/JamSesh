
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const Loginmanagement = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API call or check against stored credentials)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2 className='Title'>Jam Sesh</h2>
      <h3 className='Subtitle'> Infinite Ideas      One Place</h3>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M44.2,-15.8C51.3,7.2,46.7,32.6,27.8,48.8C9,65,-24.2,72,-43.9,58.2C-63.7,44.4,-70,9.8,-60.4,-16.8C-50.9,-43.3,-25.4,-61.9,-3.4,-60.8C18.6,-59.7,37.2,-38.9,44.2,-15.8Z" transform="translate(100 100)" />
</svg>
      <form onSubmit={Loginmanagement}>
        <label>
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
        <label>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js';
import Home from './pages/Home.js'
import NavBar from './components/NavBar.js'
import Jams from './pages/Jams.js'
import Jam from './pages/Jam.js'
import Forum from './pages/Forum.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/jams"element={<Jams/>} />
          <Route path="/jam" element={<Jam/>}/>
          <Route path="/forum" element={<Forum/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

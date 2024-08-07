import logo from '../assets/logo.svg';
import '../styles/App.css';
import { BrowserRouter as Router, Routes, route } from 'react-router-dom';
import Home from '../styles/Home.jsx';
import Signup from './src/pages/SignUp.jsx';
import LogIn from './src/pages/LogIn.jsx';
import index from './src/index.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Etiqueta from './components/etiqueta';
import Contador from './components/Contador';
import React from 'react'; // Importamos React
// import NavBar from './components/navBar';
let x = "el mejor programa del mundo mundial";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Contador />
        <p>Hi, I am a new developer and I am learning React. I am excited to learn more about React and build some cool projects.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Etiqueta /> 

       <h1>hola mundo! welcome to my fist web site!! and this is {x}</h1>
       

      </header>
    </div>
  );
}

export default App;

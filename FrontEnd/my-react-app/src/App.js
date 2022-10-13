import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
//import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState([{}])
  async function addCount() {
    //alert('You clicked me!');
    await fetch("/addcouter", {method: 'POST'})
    fetch("/couter").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }
  useEffect( () => {
    fetch("/couter").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>this.backendData</code> and save to reload.
        </p>
        <h3>{backendData.users}</h3>

        <button onClick={() => addCount()}>Default</button>
      </header>
    </div>
  );
}

export default App;

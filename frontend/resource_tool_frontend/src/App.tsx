import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const [data, setData] = useState([{"id":1,"name":"rekidai"}, {"id":2,"name":"souri"}]);
  async function getData() {
    const ret = await axios.get('http://localhost:5000/sql');
    console.log(ret);
    setData(ret.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lern More
        </a>
        <button onClick={() => getData()}>
          Click me
        </button>
        <ul>
          {
            data.map((val, i) =><li key={i}>{val.name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}


export default App;

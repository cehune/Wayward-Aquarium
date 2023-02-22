import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  let cool = [];
  useEffect = () => {
    fetch("https://www.fishwatch.gov/api/species")
      .then((res) => res.json())
      .then((data) => cool = data);
  }
  const gamer = () => {
    console.log(cool[23]['Feeds'])
    console.log(cool[23]['Feeds_'])
    console.log(cool.length)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={useEffect}> great</button>
        <button onClick = {gamer}>omg cute trans girl?</button>
      </header>
    </div>
  );
}

export default App;



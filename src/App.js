import './App.css';
import * as React from "react"

function App() {
  const words = ["SLANDER", "SAND", "SNARL", "SLED", "REAL", "DEAL", "READ", "SALE", "ALES", "SNARLED", "DARN"];
  

 


  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Finder</h1>
        <h4>Find the words among the letters! You can only use each letter once, no repeats!</h4>
      </header>
      <div className="highlight">
        <h3>L  S  D  R  E  N  A</h3>
      </div>
    </div>
  );
}

export default App;

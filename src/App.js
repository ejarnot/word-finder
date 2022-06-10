import './App.css';
import * as React from "react"
import { useState, useEffect } from "react"
import Buttons from "./components/Buttons/Buttons.js"
import WordList from "./components/WordList"


function App() {
  

  /*make "events(state!!!!)" for each thing you want to happen!!! 
  Highlight letter, connect letters ondrag, send word up above if it matches one of the words in
  the list. */

  const [letters, setLetters] = useState("")
  const [list, setList] = useState("")

  return (
    <div >
      <header >
        <h1>Word Finder</h1>
        <h4>Find the words among the letters! You can only use each letter once, no repeated letters! (All words are from 4-7 letters long)</h4>
      </header>
      <div>
        <div>
          <h1>{letters}</h1>
        </div>
        <Buttons
          letters={letters}
          setLetters={setLetters}
        />
      </div>
      <div>
        <h3>
          <WordList />
        </h3>
      </div>
    </div>
  );
}

export default App;

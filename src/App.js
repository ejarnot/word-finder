import './App.css';
import * as React from "react"
import { useState, useEffect } from "react"
import Buttons from "./components/Buttons/Buttons.js"
import Submit from "./components/Submit"
import WordList from "./components/WordList"


function App() {

  const [letters, setLetters] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [ submit, setSubmit ] = useState(false)

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
        <Submit/>
      </div>
      <div>
        <h3>
         <WordList invisible={isVisible}/>
        </h3>
      </div>
    </div>
  );
}

export default App;

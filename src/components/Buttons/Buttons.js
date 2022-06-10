import React from "react"
import "./Buttons.css"

function Buttons(props) {
    let letters = props.letters
    let setLetters = props.setLetters

    

    const onClick = (e) => {
        setLetters(letters + e.target.textContent)
    }

    return (
        <div>
            {
                ["S", "R", "N", "L", "A", "D", "E"].map((l, idx) => <button key={idx} onClick={onClick} className={`${letters.includes(l) ? "highlight" : ""}`} disabled={letters.includes(l)}>{l}</button>)
            }
            <br />
            <button onClick={() => setLetters("")}>Clear</button>
        </div>
    )
};

export default Buttons
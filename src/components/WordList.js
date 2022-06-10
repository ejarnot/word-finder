import React from "react"

function WordList (props){
    let list = props.list
    let setList = props.setList
    
    
    const words = ["SLANDER", "SAND", "SNARL", "SLED", "REAL", "DEAL", "READ", "SALE", "ALES", "SNARLED", "DARN", "DARNS", "DEALS", "READS", "LANDS", "LAND", "LARD", "SEAL"];
    
    const submitButton = (e) => {
        setList()
    }
    
    return (
      <div>
          {words.map((w, idx) => <button key={idx} onClick={submitButton} disabled={list.includes(w)}>Submit</button>)}
          <h3>{list}</h3>
      </div>
    )
}
export default WordList
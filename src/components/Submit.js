import React from "react"


const words = ["SLANDER", "SAND", "SNARL", "SLED", "REAL", "DEAL", "READ", "SALE", "ALES", "SNARLED", "DARN", "DARNS", "DEALS", "READS", "LANDS", "LAND", "LARD", "SEAL"];

function Submit (props){
    let submit = props.submit
    let setSubmit = props.setSubmit

    //need an event handler to handle clear event

    //event handler to handle show up event

    

    
    
   

    //if word in button (make props????) is equal to word in "words", make visible in wordlist???
    //if word in button is equal to word in "words", clear button
    
    return(
        <div>
            <button>Submit</button>
        </div>
  )
}
export default Submit

//what am I trying to do in this component????
//When you hit submit, then the word you just chose disappears from above the letters, and appears down below. 
    //how do we make that happen? 
    //submit button needs to be up with the letters
    //onclick event makes Buttons component clear
    //onclick even makes that one word show up 
        //one word shows up when the word typed out in Buttons is the same as one in this array. 
import React from "react"

const words = ["SLANDER", "SAND", "SNARL", "SLED", "REAL", "DEAL", "READ", "SALE", "ALES", "SNARLED", "DARN", "DARNS", "DEALS", "READS", "LANDS", "LAND", "LARD", "SEAL"];

function Wordlist(props){
    let isVisible = props.isVisible
    let setIsVisible = props.setIsVisible
    let invisible = props.invisible

    //make wordlist readable! Need spaces and make it a string????
    let wordString = words.join(" ")

    //start the app with words not visible

    //on submit click event, make single word visible if it matches 
        //pass props from Submit so they can talk to each other!
 
    if(invisible){
    return (
        <div>
            <h3>{wordString}</h3>
        </div>
      )
    }else{
        return
        <div></div>
    }
}

export default Wordlist
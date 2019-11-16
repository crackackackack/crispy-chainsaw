import React from "react"

function JokeIndex(props){
    console.log(props)
    return (
        <div className="joke-index">
            <h3>{props.jokes.question}</h3>
            <h2>{props.jokes.punchline}</h2>
            <img src= {props.jokes.imgUrl}/>
            </div>
    )
}
export default JokeIndex
import React from "react"
import JokeIndex from "./JokeIndex"

function App(){
  return (
    <div className="myJokes">
      <JokeIndex 
        jokes={{question: "If you aren't Taylor Gang, what are you?",
                punchline:"DIE!",
                // eslint-disable-next-line
                imgUrl:"https://cdn.wallpapersafari.com/48/30/egIRQp.jpg", }}
                />

        <JokeIndex 
        jokes={{question: "We live in a?",
                punchline:"Society.",
                // eslint-disable-next-line
                imgUrl:"https://image.businessinsider.com/5d9ba6645288793e827eebbd?width=1100&format=jpeg&auto=webp", }}
                />
         <JokeIndex 
        jokes={{question: "Knock Knock?",
                punchline:"It's me.",
                // eslint-disable-next-line
                imgUrl:"https://pmcvariety.files.wordpress.com/2017/09/batman.jpg?w=1000", }}
                />
    </div>

  )
}
export default App
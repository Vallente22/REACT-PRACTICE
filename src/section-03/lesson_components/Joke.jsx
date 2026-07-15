import { useState } from "react";

/**
 * challenge: create state isShown with boolean value of false
 * and add a button that toggles the value back and forth //done
 */
const Joke = (props) => {
  const [isShown, setIsShown] = useState(false)

  const showJoke = () => {
      setIsShown(prev => !prev)
    }

  return (
    <article>
      {props.setup && <h2>Setup: {props.setup}</h2>} 
       <p>Punchline: {props.punchline}</p>
      <button onClick={showJoke}>{isShown ? "hide" : "show"}</button>
      <hr/>
    </article>
  )
}

/*
{props.setup && <p className="setup">Setup: {props.setup}</p>} 
// "If the thing on the left is truthy, evaluate and return the thing on the right."

<p className="punchline">Punchline: {props.punchline}</p>
*/

export default Joke;
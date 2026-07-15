import { useState } from "react";

/**
 * challenge only show punchline paragraph if isshown is true//done
 */
const Joke = (props) => {
  const [isShown, setIsShown] = useState(false)

  const showJoke = () => {
      setIsShown(prev => !prev)
    }

  return (
    <article>
      {props.setup && <h2>Setup: {props.setup}</h2>} 
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={showJoke}>{isShown ? "hide" : "show"}</button>
      <hr/>
    </article>
  )
}

/*
{props.setup && <p className="setup">Setup: {props.setup}</p>} 
// "If the thing on the left is truthy, evaluate and return the thing on the right."

<p className="punchline">Punchline: {props.punchline}</p>

{isShown === true ? <p>Punchline: {props.punchline}</p> : <p></p>} < this technically works theres just better alternative which is the one used above
isShown starts as false and toggles between true and false every time the button is clicked. 
Since && only renders the element on the right when the expression on the left is true, it's a 
cleaner alternative to a ternary when we only want to conditionally render an element.
*/

export default Joke;
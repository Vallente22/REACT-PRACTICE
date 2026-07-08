const Joke = (props) => {
  return (
    <>
      <article>
        {props.setup && <h2>Setup: {props.setup}</h2>} 
        <p>Punchline: {props.punchline}</p>
        <hr/>
      </article>
    </>
  )
}

/*
{props.setup && <p className="setup">Setup: {props.setup}</p>} 
// "If the thing on the left is truthy, evaluate and return the thing on the right."

<p className="punchline">Punchline: {props.punchline}</p>
*/

export default Joke;
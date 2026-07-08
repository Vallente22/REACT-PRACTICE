const Joke = (props) => {
  return (
    <>
      <article>
        <h2>{props.setup}</h2>
        <p>-{props.punchline}</p>
        <h1>--</h1>
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
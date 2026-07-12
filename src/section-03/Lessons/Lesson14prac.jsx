import { useState } from "react";

const Lesson14prac = () => {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(prev => prev + 1)
  }

  const [isGoingOut, setIsGoingOut] = useState(true);

  const [isOn, setIsOn] = useState(true)

  const [showSecret, setShowSecret] = useState(false)
  
  return (
    <>
      <main >
        <h1>Counter: {count}</h1>
        <button onClick={counter}>Increase</button>
        <hr />
        <h1>Do I feel like going out tonight?</h1>
        <button 
          onClick={() => setIsGoingOut(prev => !prev)}
          aria-label={`Current answer is ${isGoingOut ? "yes" : "no"}`}
        >{isGoingOut ? "yes" : "no"}</button>
        <hr />
        <div 
          style={{
            backgroundColor: isOn ? "white" : "black",
            color: isOn ? "black" : "white"
          }}
        >
          <h1>{`Light is ${isOn ? "ON" : "OFF"}`}</h1>
          <button 
            onClick={() => setIsOn(prev => !prev)}
            aria-label={`Toggle the light: ${isOn ? "ON" : "OFF"} `}
          >{`Turn ${!isOn ? "ON" : "OFF"}`}</button>
        </div>
        <hr />
        <h1>React Challenge</h1>
        <p>{`${showSecret ? "The treasure is buried under the tree." : " "}`}</p>
        <button onClick={() => setShowSecret (prev => !prev)}>{`${showSecret ? "Hide Secret" : "Show Secret"}`}</button>
        

      </main>
    </>
  )
}

export default Lesson14prac;
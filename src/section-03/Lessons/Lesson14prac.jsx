import { useState } from "react";

const Lesson14prac = () => {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(prev => prev + 1)
  }

  const [isGoingOut, setIsGoingOut] = useState(true);

  const [isOn, setIsOn] = useState(true)

  
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
            background: isOn ? "white" : "black",
            color: isOn ? "black" : "white"
          }}
        >
          <h1>{`Light is ${isOn ? "ON" : "OFF"}`}</h1>
          <button 
            onClick={() => setIsOn(prev => !prev)}
          >{`Turn ${!isOn ? "ON" : "OFF"}`}</button>
          <hr />
        </div>
        

      </main>
    </>
  )
}

export default Lesson14prac;
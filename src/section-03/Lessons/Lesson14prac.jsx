import { useState } from "react";

const Lesson14prac = () => {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(prev => prev + 1)
  }

  const [isGoingOut, setIsGoingOut] = useState(true);

  const goingOut = () => {
    setIsGoingOut(prev => !prev)
  }

  
  return (
    <>
      <main>
        <h1>Counter: {count}</h1>
        <button onClick={counter}>Increase</button>
        <hr />
        <h1>Do I feel like going out tonight?</h1>
        <button 
          onClick={() => setIsGoingOut(prev => !prev)}
          aria-label={`Current answer is ${isGoingOut ? "yes" : "no"}`}
        >{isGoingOut ? "yes" : "no"}</button>
      </main>
    </>
  )
}

export default Lesson14prac;
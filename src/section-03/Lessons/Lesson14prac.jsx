import { useState } from "react";

const Lesson14prac = () => {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(prev => prev + 1)
  }
  
  return (
    <>
      <main>
        <h1>Counter: {count}</h1>
        <button onClick={counter}>Increase</button>
      </main>
    </>
  )
}

export default Lesson14prac;
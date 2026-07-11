/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 * THE CALLBACK FUNCTION IN THIS CASE IS THE PREVCOUNT 
 */ 

import React from "react"

const Lesson13 = () => {
  /**
   * Challenge: 
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */

  const [counter, setCounter] = React.useState("0")

  const handleMinusClick = () => {
    setCounter(prevCount => prevCount + 1)
  }
  
  const handlePlusClick = () => {
    setCounter(prevCount => prevCount - 1)
  }
  
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" onClick={handleMinusClick} aria-label="Decrease count">-</button>
        <h2 className="count">{counter}</h2>
        <button className="plus" onClick={handlePlusClick} aria-label="Increase count">+</button>
      </div>
    </main>
  )
}

export default Lesson13;

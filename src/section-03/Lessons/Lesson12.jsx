import React from "react"

const Lesson12 = () => {
  /**
   * Challenge: 
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */

  const [counter, setCounter] = React.useState("0")

  const handleMinusClick = () => {
    setCounter(counter - 1)
  }
  
  const handlePlusClick = () => {
    setCounter(counter + 1)
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

export default Lesson12;
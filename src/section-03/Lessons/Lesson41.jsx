import React from "react"
import Count from "../lesson_components/Count"

const Lesson41 = () => {

  const [counter, setCounter] = React.useState(0)

  const handleMinusClick = () => {
    setCounter(prevCount => prevCount - 1)
  }
  
  const handlePlusClick = () => {
    setCounter(prevCount => prevCount + 1)
  }

  /**
   * Challenge:
   * - Create a new component called `Count`
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the h2.count element below
   *      and display the incoming prop `number`
   * - Replace the h2.count below with an instance of
   *   the new Count component, passing the correct value
   *   to its `number` prop.
   * - After doing this, everything should be working the
   *   same as before. DONE
   */
  
  return (
    <main className="container">
      <div className="counter">
        <button className="minus" onClick={handleMinusClick} aria-label="Decrease count">-</button>
        <Count number={counter}></Count>
        <button className="plus" onClick={handlePlusClick} aria-label="Increase count">+</button>
      </div>
    </main>
  )
}

export default Lesson41;

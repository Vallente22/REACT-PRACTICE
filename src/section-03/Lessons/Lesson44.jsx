import { useState } from "react"
import pads from "../lesson_components/pads"
import '../lesson_styles/padschallenge.css'

const Lesson44 = () => {
  /**
   * Challenge part 1: DONE
   * 1. Initialize state with the default value of the
   *    array pulled in from pads.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS is already written for you)
   *    (Don't worry about using the "on" or "color" 
   *    properties yet) 
   */

  const [padsState, setPadsState] = useState(pads)

  const buttonElements = padsState.map((padsItem) => {
    return (
      <button key={padsItem.id}></button>
    )
  })


  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

export default Lesson44;
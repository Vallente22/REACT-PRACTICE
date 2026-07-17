import { useState } from "react"
import pads from "../lesson_components/pads"
import '../lesson_styles/padschallenge.css'

const Lesson44 = (props) => {
  /**
   * Challenge: use a ternary to determine the backgroundColor
   * of the buttons
   * If darkMode is true, set them to "#222222"
   * If darkMode is false, set them to "#cccccc"
   */

  const [padsState, setPadsState] = useState(pads)

  const buttonElements = padsState.map((padsItem) => {
    return (
      <button style={{backgroundColor: props.darkMode === true ? "#222222" : "#cccccc"}} key={padsItem.id}></button>
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
import { useState } from "react"
import pads from "../lesson_components/pads"
import '../lesson_styles/padschallenge.css'
import Pad from "../lesson_components/Pad"

const Lesson44 = (props) => {

  const [padsState, setPadsState] = useState(pads)

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   * 
   * Pass that function down to each of the Pad components
   * and set it up so when they get clicked, the function runs. DONE
   */

  const togglePad = () => {
    console.log("clicked")
  }

  const buttonElements = padsState.map((padsItem, index) => {
    return (
      <Pad key={padsItem.id} color={padsItem.color} on={padsItem.on} toggle={togglePad} />
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
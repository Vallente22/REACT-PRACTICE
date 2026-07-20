import { useState } from "react"
import pads from "../lesson_components/pads"
import '../lesson_styles/padschallenge.css'
import Pad from "../lesson_components/Pad"

const Lesson44 = (props) => {

  const [padsState, setPadsState] = useState(pads)

  /**
   * Challenge: DONE
   * Call setPads to update the state of the one pad that was
   * clicked. Map over the previous pads array, and if the current
   * item you're iterating over has the same id as the `id` passed
   * to this function, then return a new object with the `on` value
   * set to the opposite of what it was before.
   * Otherwise (if the ids don't match), just return the previous
   * item as it was, unchanged. 
   */


  //map over the pads array, and if current item has the same id as the one passed
  //to this function, then flip its `on` value
  const togglePad = (clickedId) => {
    setPadsState(prevPads => prevPads.map(pads => {
      if (clickedId === pads.id) {
        return ({
          ...pads,
          on: !pads.on
        })
      } return pads
    })
  )}

  const buttonElements = padsState.map((padsItem) => {
    return (
      <Pad key={padsItem.id} id={padsItem.id} color={padsItem.color} on={padsItem.on} toggle={togglePad} />
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
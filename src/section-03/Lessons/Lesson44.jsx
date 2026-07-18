import { useState } from "react"
import pads from "../lesson_components/pads"
import '../lesson_styles/padschallenge.css'
import Pad from "../lesson_components/Pad"

const Lesson44 = (props) => {
  /**
   * Challenge part 2:
   * 1. Create a separate component called "Pad" and
   *    replace the `button` above with our <Pad /> component
   * 2. Pass the Pad component a prop called `color` with the
   *    value of the same name from the `padsData` objects
   * 3. In the Pad component, apply an inline style to the <button>
   *    to set the backgroundColor of the button.
   * 
   * (We'll deal with the "on" property soon)
   */

  const [padsState, setPadsState] = useState(pads)

  const buttonElements = padsState.map((padsItem, index) => {
    return (
      <Pad key={padsItem.id} color={padsItem.color} on={padsItem.on} />
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
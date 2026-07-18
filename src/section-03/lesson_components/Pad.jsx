import { useState } from "react";

const Pad = (props) => {
  /**
   * Challenge: Create state controlling whether
   * this pad is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   * 
   * Create an event listener so when the pad is clicked,
   * it toggles from "on" to "off".
   * 
   * Goal: clicking each pad should toggle it on and off.
   */

  const [on, setOn] = useState(props.on)

  const togglePad = () => {
    setOn(prev => !prev)
  }
    
  return (
    <button className={on ? "on" : undefined}  
      style={{backgroundColor: props.color}}
      onClick={togglePad}  
    ></button>
  )
}

export default Pad;
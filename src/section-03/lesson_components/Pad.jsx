import { useState } from "react";

const Pad = (props) => {
  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   * 
   * Pass that function down to each of the Pad components
   * and set it up so when they get clicked, the function runs
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
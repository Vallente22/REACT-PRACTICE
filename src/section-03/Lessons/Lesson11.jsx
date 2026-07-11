//import { useState } from "react"
import React from "react"
//reminder: second value of array given in usestate is a function that updates the state (by putting the value inside the parenthesis or basically passing the new value as its argument)
const Lesson11 = () => {
  
  const [isImportant, setIsImportant] = React.useState("Yes")

  const handleClick = () => {
    setIsImportant("Definitely")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value" onClick={handleClick}>{isImportant}</button>
    </main>
  )
}

export default Lesson11;
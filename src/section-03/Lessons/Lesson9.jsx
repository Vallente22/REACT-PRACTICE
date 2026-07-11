//import { useState } from "react"
import React from "react"

const Lesson9 = () => {
  /**
   * Challenge: Replace our hard-coded "Yes" on the page with 
   * some state initiated with React.useState()
   */
  
  const result = React.useState("Yes")
  console.log(result)

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{result}</button>
    </main>
  )
}

export default Lesson9;
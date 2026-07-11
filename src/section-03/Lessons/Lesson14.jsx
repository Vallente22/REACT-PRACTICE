import { useState } from "react"

const Lesson14 = () => {
//challenge initialize state for isgoingout as boolean

  const [isGoingOut, setIsGoingOut] = useState(true)

  const handleBoolean = () => {
    setIsGoingOut(prev => !prev)
  }


  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button 
        className="value" 
        onClick={handleBoolean}
        aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
      >{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}

export default Lesson14;
import { useState, useEffect } from "react";
import WindowTrackerComponent from "../components/WindowTrackerComponent"

export default function WindowTracker() {

  const [show, setShow] = useState(true)

  console.log(show)

  return (
    <main className="container">
      <button onClick={() => setShow(prev => !prev)}>
        Toggle WindowTracker
      </button>
      {show && <WindowTrackerComponent />}
    </main>
  )
}
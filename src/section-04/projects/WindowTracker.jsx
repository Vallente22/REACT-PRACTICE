import { useState, useEffect } from "react";
import WindowTrackerComponent from "../components/WindowTrackerComponent"

export default function WindowTracker() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

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
import { useEffect, useState } from "react"

export default function WindowTrackerComponent() {
  /**
   * challenge: create state windowWidth and default to window.innerWidth
   * when the window width changes, update the state
   */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  /**
   * There's a bug in this code:
   * The resize event belongs to the browser, not React.
   * React can remove the component from the screen,
   * but the browser doesn't know that. It keeps listening
   * for resize events unless we tell it to stop.
   * If we don't remove the event listener, every time
   * this component appears again, another listener is added.
   * Eventually, one resize can trigger the same code
   * multiple times.
   */
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      console.log("Resized!")
    })
  }, [])
  return(
    <h1>Window width: {windowWidth}</h1>
  )
}
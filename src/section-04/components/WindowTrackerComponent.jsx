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
    // Function that runs whenever the browser window is resized
    const watchWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    // Tell the browser to start listening for resize events
    window.addEventListener("resize", watchWindowWidth)

    // When the component is removed, tell the browser to stop listening
    return () => {
      window.removeEventListener("resize", watchWindowWidth)
    }
  }, [])

  return(
    <h1>Window width: {windowWidth}</h1>
  )
}
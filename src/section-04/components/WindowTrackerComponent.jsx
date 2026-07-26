import { useEffect } from "react"

export default function WindowTrackerComponent() {
  /**
   * challenge: create state windowWidth and default to window.innerWidth
   * when the window width changes, update the state
   */

  useEffect(() => {
    window.addEventListener("resize", function() {
      console.log("Resized!")
    })
  }, [])
  return(
    <h1>Window width: {window.innerWidth}</h1>
  )
}
import { useState, useEffect } from "react";
import WindowTrackerComponent from "../components/WindowTrackerComponent"

export default function WindowTracker() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  return (
    <main className="container">
      <button>
        Toggle WindowTracker
      </button>
      <WindowTrackerComponent />
    </main>
  )
}
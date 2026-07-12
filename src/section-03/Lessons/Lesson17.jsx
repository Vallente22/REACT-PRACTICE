import { useState } from "react";
import "../lesson_styles/lesson17.css"
const Lesson17 = () => {
  const [myFavoriteThings, setMyFavoriteThings] = useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(
      prevFavThings => [
        ...prevFavThings, 
        allFavoriteThings[prevFavThings.length]
      ]
    )
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}

export default Lesson17;
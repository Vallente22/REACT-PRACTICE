import { useState } from "react"

export default function fetchDataReactPrac(props) {
  const [starWarsData, setStarWarsData] = useState(null)
  
  /**
   * Challenge: lesson-08
   * Instead of console logging the data, save it in state
   * and display it to the page. (Just replace the hard-coded
   * object inside the `<pre>` element with the data)
   */
  
  //fetch("https://swapi.dev/api/people/1")
  //  .then(res => res.json())
  //  .then(data => setStarWarsData(data))
  
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
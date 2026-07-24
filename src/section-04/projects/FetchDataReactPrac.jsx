import { data } from "autoprefixer"
import { useState, useEffect, use } from "react"

export default function fetchDataReactPrac(props) {
  const [starWarsData, setStarWarsData] = useState(null)
  const [count, setCount] = useState(0)

  console.log("rendered")

 
  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])
  
  
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

/**
 * quiz:
 * 1. In what way are React components meant to be "pure functions"
 * -when given props it should return the exact same value or ui
 * 2. What is a "side effect" in React? What are some examples?
 * -any code that affects or interact with outside system like APIs
 * 3. What is NOT a "side effect" in React? Examples?
 * -anything react is in charge of. things like state and rendering ui elements
 * 4. When does React run your useEffect function? When does it NOT run the effect function?
 * -as soon as the page loads or basically when the component renders for the first time
 * -effect wont run if the value in the dependencies does not change between renders
 * 5. How would you explain what the "dependecies array" is?
 * -it will tell if the component should re-render if the value in the dependency array changes or not
 */
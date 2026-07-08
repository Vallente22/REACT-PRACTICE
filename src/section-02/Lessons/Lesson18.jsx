import Joke from "../lesson_components/Joke";
import jokesData from "../lesson_components/jokesData";

const Lesson18 = () => {
  const jokeElements = jokesData.map((joke) =>{
    return (
      <Joke 
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )}
  )
  return (
    <main>
      {jokeElements}
    </main>
  )
}

/* LESSON 20 QUIZ
1. What does the .map() array method do?

-.map() loops through an array, transforms each item, 
and returns a new array with the transformed values. 
It does not change the original array.

2. What do we usually use .map() for in React?

-In React, we use .map() to render a list of components from an array
of data. For example, turning an array of jokes into
 multiple <Joke /> components.

3. Critical thinking: Why is using .map() better than just
creating the components manually by typing them out?

-Using .map() is faster, cleaner, and easier to maintain.
If the data changes, the UI updates automatically without 
having to manually add or remove components. 
It also reduces repetitive code.
 */

export default Lesson18;
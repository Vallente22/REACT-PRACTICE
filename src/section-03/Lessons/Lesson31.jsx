import Joke from "../lesson_components/Joke";
import jokesData from "../lesson_components/jokesData";
//go to jokes jsx for the changes made
const Lesson31 = () => {
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

export default Lesson31;
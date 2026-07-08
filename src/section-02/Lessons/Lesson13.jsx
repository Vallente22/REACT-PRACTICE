//challenge: create a page that displays joke. create separate file for the joke component
import Joke from '../lesson_components/Joke'

const Lesson13 = () => {
  return (
    <>
      <div>
        <Joke 
          setUp="I got my daughter a fridge for her birthday."
          punchLine="I can't wait to see her face light up when she opens it."
        />
        <Joke 
          setUp="How did the hacker escape the police?"
          punchLine="He just ransomware!"
        />
        <Joke 
          setUp="Why don't pirates travel on mountain roads?"
          punchLine="Scurvy."
        />
        <Joke 
          setUp="Why do bees stay in the hive in the winter?"
          punchLine="Swarm."
        />
        <Joke 
          setUp="What's the best thing about Switzerland?"
          punchLine="I don't know, but the flag is a big plus!"
        />
        <Joke 
          punchLine="It's hard to explain puns to kleptomaniacs because they always take things literally."
        />
      </div>
    </>
  )
}

export default Lesson13;
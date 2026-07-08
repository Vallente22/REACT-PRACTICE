//continuation of lesson13
/**
 * Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

//ANSWER: curly braces {} are used for datatypes that are not string such as numbers, boolean, array
import Joke from '../lesson_components/Joke'

const Lesson14 = () => {
  return (
    <>
      <div>
        <Joke 
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          upvotes={10}
          isPun={true}
          comments={[
            {author: " ", subject: " ", content: " "},
            {author: " ", subject: " ", content: " "}
          ]}
          
        />
        <Joke 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
        />
        <Joke 
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
        <Joke 
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
        />
        <Joke 
          punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
        />
      </div>
    </>
  )
}

export default Lesson14;
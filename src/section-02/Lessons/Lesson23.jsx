import Header from "../lesson_components/Header";
import Entry from "../lesson_components/Entry";
import data from "../lesson_components/data";

//from challenge: map over the array to create an entry and display it on the page
const Lesson23 = () => {
  const travelElements = data.map((entry) =>{
    return (
      <Entry 
        key={entry.id}
        entry={entry}
      />
    )
  })
  
  return (
    <>
      <Header />
      <main>
        {travelElements}
      </main>
    </>
  )
}

export default Lesson23;
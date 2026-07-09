import Header from "../lesson_components/Header";
import Entry from "../lesson_components/Entry";
import data from "../lesson_components/data";


const Lesson24 = () => {
  const travelElements = data.map((entry) =>{
    return (
      <Entry 
        key={entry.id}
        {...entry}//another way to pass down props but will have to go back to props.img.src etc. on the entry component
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

export default Lesson24;
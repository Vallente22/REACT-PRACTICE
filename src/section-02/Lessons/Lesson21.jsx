import Header from "../lesson_components/Header";
import Entry from "../lesson_components/Entry";
import data from "../lesson_components/data";

//from challenge: map over the array to create an entry and display it on the page
const Lesson21 = () => {
  const travelElements = data.map((entry) =>{
    return (
      <Entry 
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
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

export default Lesson21;
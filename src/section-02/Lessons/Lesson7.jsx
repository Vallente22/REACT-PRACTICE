//mini challenge
const App = () => {
  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21 ) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return (
    <h1>Good {timeOfDay}</h1>
  )
}

const Lesson7 = () => {
  return (
    <>
      <App />
    </>
  )
}

export default Lesson7;
const Lesson14 = () => {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true
  
  let answer = isGoingOut === true ? "yes" : "no" // 👈 Use ternary here
  
  // Remove the code below 👇 once your ternary is done
  
  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{answer}</button>
    </main>
  )
}

export default Lesson14;
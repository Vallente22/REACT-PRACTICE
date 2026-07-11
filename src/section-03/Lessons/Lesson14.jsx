const Lesson14 = () => {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true
  
  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "yes" : "no"}</button>
    </main>
  )
}

export default Lesson14;
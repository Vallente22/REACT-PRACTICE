const Lesson5 = () => {
  const handleClick = () => {
    return (
      console.log("i was touched")
    )
  }
  const handleHover = () => {
    return (
      console.log("i was hovered")
    )
  }

  return (
    <>
      <main className="container">
        <img 
          src="https://picsum.photos/640/360"
          alt="Placeholder image from Picsum"
          onMouseOver={handleHover} 
        />
        <button onClick={handleClick}>Click me</button>

      </main>
    </>
  )

}

export default Lesson5;
import { useState } from "react";
import "../lesson_styles/lesson22.css"

//input can be some type of button by putting 
//submit on type but its better practice to put a button inside the form and put submit on type
//<button type="submit">
// <input type="submit" value="click" name="" id="" />
const Lesson22 = () => {
  return (
    <section>
      <h1>Signup form</h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />

        <button type="submit">Submit</button>
      </form>
    </section>
    
  )
}

export default Lesson22;
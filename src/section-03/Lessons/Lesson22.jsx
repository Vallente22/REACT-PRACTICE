import { useState } from "react";
import "../lesson_styles/lesson22.css"

//create another label and input for password
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
      </form>
    </section>
    
  )
}

export default Lesson22;
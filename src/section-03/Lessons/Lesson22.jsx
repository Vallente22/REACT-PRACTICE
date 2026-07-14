import { useState } from "react";
import "../lesson_styles/lesson22.css"

/**
 * by default, the form is set to GET method if you dont specify what is it for
 * and will display whatever you put in the form on the url as it tries to look for whatever u 
 * put inside on some other site
 * by using POST method, your input wont be displayed in url
 * as it puts the info in a post request 
 * 
 */
const Lesson22 = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData("formEl")
    const email = formData.get("email")
    //submit info to backend
    formEl.reset()
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="POST">
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
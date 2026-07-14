import "../lesson_styles/lesson22.css"

/**
 * form action allows to shorten the amount of code
 * 
 * event.preventDefault() from using this to prevent page reload
  const formEl = event.currentTarget from using this to be able to get the form element
  const formData = new FormData("formEl") from using this to be able to get the data in form element
  formEl.reset() from using this to reset the form after submitting information
 * onSubmit={handleSubmit} method="POST" from using this to specify what we want the form to do
 * to simply using action=""
 */
const Lesson22 = () => {
  // changed from handleSubmit because React passes FormData directly instead of an event.
  const signUp = (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")//part of a challenge
    console.log(password)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Lesson22;
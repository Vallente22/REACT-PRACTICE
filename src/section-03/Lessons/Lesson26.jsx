import "../lesson_styles/lesson22.css"

const Lesson22 = () => {
/** 
 * challenge: get the value of radio button
 */
  const signUp = (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    console.log(employmentStatus)

  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="@gmail.com" type="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label htmlFor="unemployed">
            <input id="unemployed" type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label htmlFor="part-time">
            <input id="part-time" type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label htmlFor="full-time">
            <input id="full-time" type="radio" name="employmentStatus" value="full-time" />
            Full-time
        </label>
        </fieldset>

        <button type="submit">Submit</button>

      </form>
    </section>
  )
}

export default Lesson22;
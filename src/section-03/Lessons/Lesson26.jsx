import "../lesson_styles/lesson22.css"

const Lesson22 = () => {
/** 
 * other form inputs/elements:
  defaultValue - Used to prepopulate an input with an initial value. Commonly used when editing a profile so the user's existing information is already filled in.
  <textarea> - Used when the user needs to enter multiple lines of text, such as comments, feedback, or descriptions.
  Radio buttons - Used when the user must choose exactly one option from a group of choices.
  <fieldset> - Groups related form inputs together (for example, a group of radio buttons). Browsers usually display it with a border, but its main purpose is to semantically group related controls.
  <legend> - Provides a title or label for a <fieldset>, helping users understand what the grouped inputs are for.
 */
  const signUp = (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")

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
          <label htmlFor="">
            <input type="radio" name="employmentStatus" />
            Unemployed
          </label>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" />
            Part-time
          </label>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" />
            Full-time
        </label>
        </fieldset>

        <button type="submit">Submit</button>


      </form>
    </section>
  )
}

export default Lesson22;
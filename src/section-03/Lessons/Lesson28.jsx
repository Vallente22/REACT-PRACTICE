import "../lesson_styles/lesson22.css"

const Lesson28 = () => {
/** 
 * checkbox works almost the same way as radio, but will have to use .getAll
 * if we want to get the array of checked boxes.
 * defaultChecked also works just like in radio
 */
  const signUp = (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    console.log(dietaryRestrictions)

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
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <button type="submit">Submit</button>

      </form>
    </section>
  )
}

export default Lesson28;
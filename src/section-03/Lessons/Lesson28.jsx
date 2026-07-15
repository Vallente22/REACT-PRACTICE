import "../lesson_styles/lesson22.css"

const Lesson28 = () => {
/** 
 * checkbox works almost the same way as radio, but will have to use .getAll()
 * if we want to get the array of checked boxes.
 * defaultChecked also works just like in radio.
 * 
 * dropdown is another type of input(the <select> with <option> inside). 
 * its difference is we only put the name attribute in the <select> tag unlike in radio or checkbox
 * where there is a need to put it in every <input> tag.
 * but the value attribute is still the same from other input, need to put it in their respective <option>.
 * defaultValue also works if we want one to replace the default choice, just put the attribute inside <select>.
 * in some cases there are drop downs that default like "choose option", to get that, just leave the value
 * attribute empty and put the <option> with the "choose option" text at the top of the list of <option>
 * also put a "disabled" inside that same <option> so that the users cant interact with that option
 * note that by default, dropdowns dont require users to pick an option so make sure to have a "required"
 * attribute inside the <select> tag if needed
 */
  const signUp = (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")

    console.log(favColor)

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

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button type="submit">Submit</button>

      </form>
    </section>
  )
}

export default Lesson28;
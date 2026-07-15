import "../lesson_styles/lesson22.css"
/**
 * if the form is too big and we want to get all the values of fields, we can use a js method
 * Object.fromEntries()as a shortcut. however, it wont pick up all of the choices checked 
 * in the checkbox(same issue in checkbox lesson where we have to use .getAll unlike
 * the other fields)
 * 
 * challenge: retrieve the array of checked items from the dietaryRestrictions checkboxes
 */
const Lesson30 = () => {

  const signUp = (formData) => {
    console.log(Object.fromEntries(formData))
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="admin@gmail.com" type="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" defaultValue="admin" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" defaultChecked />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" defaultChecked />
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
        <select name="favColor" id="favColor" defaultValue="Red" required>
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

export default Lesson30;
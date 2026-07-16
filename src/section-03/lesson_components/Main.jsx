import { useState } from "react"

const Main = () => {
/**
 * Challenge: update the form using action
 */
  const [ingredients, setIngredients] = useState([])

  const ingredientsListItem = ingredients.map((ingredients) => {
    return (
      <li key={ingredients}>{ingredients}</li>
    )
  })

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
  }

  /**
   * Challenge:
   * Using conditional rendering, only render the new <section> IF
   * there are ingredients added to the list of ingredients.
   */

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input 
          type="text" 
          placeholder="e.g. oregano" 
          aria-label="Add ingredients"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  )
}

export default Main;
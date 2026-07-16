import { useState } from "react"

const Main = () => {
  const [ingredients, setIngredients] = useState([])

  const ingredientsListItems = ingredients.map((ingredients) => {
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
   * Only display the div.get-recipe-container if the ingredients list
   * has more than 3 items in it. (Fewer than that and it might not
   * give great results from the chef 🤖👩‍🍳)
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
      {ingredients.length > 0 &&
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
          {ingredients.length > 3 &&
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          }
        </section>
      }
      
    </main>
  )
}

export default Main;
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

const Main = () => {
  /**
   * Challenge: clean up our code!
   * Let's make a couple new components to make things a
   * little cleaner. (Notice: I'm not suggesting what we
   * have now is bad or wrong. I'm mostly finding an excuse
   * to get in some hands-on practice 🙂)
   * 
   * 1. Move the entire recipe <section> into its own
   *    ClaudeRecipe component
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component.
   * 
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   * 
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
   */

  const [ingredients, setIngredients] = useState([])

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
  }

  const [recipeShown, setRecipeShown] = useState(false)

  const getRecipe = () => {
    setRecipeShown(prev => !prev)
  }

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
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}

export default Main;
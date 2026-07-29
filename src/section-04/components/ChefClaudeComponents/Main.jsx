import { useEffect, useRef, useState } from "react"
import ClaudeRecipe from "../ChefClaudeComponents/ClaudeRecipe"
import IngredientsList from "../ChefClaudeComponents/IngredientsList"
import { getRecipeFromLlama } from "../../ai"

const Main = () => {

  const [ingredients, setIngredients] = useState([])

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
  }

  const [recipe, setRecipe] = useState("")

  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView()
    }
  }, [recipe])

  const getRecipe = async () => {
    const recipeMarkdown = await getRecipeFromLlama(ingredients)
    setRecipe(recipeMarkdown)
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
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection} />}
      {recipe.length > 0 && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

export default Main;
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
      <ul>
        {ingredientsListItem}
      </ul>
    </main>
  )
}

export default Main;
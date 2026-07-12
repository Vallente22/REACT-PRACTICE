import { useState } from "react"

const Main = () => {
/**
 * Challenge: Update our app so that when the user enters a
 * new ingredient and submits the form, it adds that new
 * ingredient to our list!
 */
  const [ingredients, setIngredients] = useState([])

  const ingredientsListItem = ingredients.map((ingredients) => {
    return (
      <li key={ingredients}>{ingredients}</li>
    )
  })

  const handleSubmit = (event) => {
    /**
     * Like before, don't worry about this FormData stuff yet.
     * Just use the newIngredient below to help you finish the
     * challenge.
     */
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
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
const Main = () => {
//map over the ingredient list for challenge in lesson6 and render them as list items
const ingredients = ["Chicken", "Oregano", "Tomatoes"]

const ingredientsListItem = ingredients.map((ingredients) => {
  return (
    <li key={ingredients}>{ingredients}</li>
  )
})
//lesson6 anOther challenge: add an onSubmit event listener on the form
const handleSubmit = (event) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const newIngredient = formData.get("ingredient")
  ingredients.push(newIngredient);
  console.log(ingredients)
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
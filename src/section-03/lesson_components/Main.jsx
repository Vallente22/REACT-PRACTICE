const Main = () => {
  return (
    <main>
      <form className="add-ingredient-form">
        <input 
          type="text" 
          placeholder="e.g. oregano" 
          aria-label="Add ingredients"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  )
}

export default Main;
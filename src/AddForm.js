

function AddForm ( { addForageable, newImage, newName, newScientific, newRecipe, setNewImage, setNewName, setNewScientific, setNewRecipe } ) {
    
    return (
        <form onSubmit={addForageable}>
            <label>
                Name:
                <input type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            </label>
            <label>
                Scientific Name:
                <input type="text" name="scientific" value={newScientific} onChange={(e) => setNewScientific(e.target.value)}/>
            </label>
            <label>
                Recipe:
                <input type="text" name="recipe" value={newRecipe} onChange={(e) => setNewRecipe(e.target.value)}/>
            </label>
            <label>
                Image URL:
                <input type="text" name="image" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
            </label>
            <input type="submit" value="Add to Recipe Book" />
        </form>
    )
}

export default AddForm;
import { useState } from 'react';
import { useHistory } from "react-router-dom";


function AddForm ( {forageables} ) {
    const [newName, setNewName] = useState("");
    const [newScientific, setNewScientific] = useState("");
    const [newRecipe, setNewRecipe] = useState("");
    const [newImage, setNewImage] = useState("");
    let history = useHistory();

    
    
    function addForageable(e) {
      
        e.preventDefault();
        const newForageable = {
           
            name: newName,
            scientific: newScientific,
            recipe: newRecipe,
            image: newImage
        }; 
        

        fetch('http://localhost:3004/forageables', 
            {method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newForageable)});

            
            history.push('/home');
                
    }
    
    
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
//import hooks
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./AddForm.css";

//import setForageables prop passed down from App.js
//create a form that enables the user to add a forageable to the collection
//set state for new variables inputted into form
//save useHistory function to variable for use in function below (to re-route to home page when form is submitted)
//save new data (a new object with 4 key:value pairs) from the form input into variable newForageable when form is submitted
//fetch POST to add newForageable to Recipe Book collection
//fetch GET to setForageables and trigger re-route back to Home
function AddForm ( {setForageables} ) {
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

            fetch("http://localhost:3004/forageables")
                .then (r => r.json())
                .then (data => setForageables(data))
            
            history.push('/home');     
    }
    
    return (
        <div>
            <h3>Add more forageable plants and mushrooms to the collection in your <br></br> Recipe Book by submitting the relevant information in the form below.</h3>
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
                <input type="submit" id="submit-button" value="✨Add to Recipe Book✨" />
            </form>
        </div>
    )
}
export default AddForm;
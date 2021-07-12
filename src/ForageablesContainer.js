import { useEffect , useState } from "react";
import ForageablesCollection from "./FCollection.js";
import AddForm from "./AddForm";


function ForageablesContainer() {
    const [forageables, setForageables] = useState([])
    const [newForageable, setNewForageable] = useState("");
    const [newName, setNewName] = useState("");
    const [newScientific, setNewScientific] = useState("");
    const [newRecipe, setNewRecipe] = useState("");
    const [newImage, setNewImage] = useState("");
    

    const getNextId = ((id) => () => ++id)(6);

    function addForageable(e) {
        e.preventDefault();
        const newForageable = {
          id: getNextId(),
          name: newName,
          scientific: newScientific,
          recipe: newRecipe,
          image: newImage
        }; 
        setNewForageable(newForageable);
        setNewScientific(newScientific);
        setNewName(newName);
        setNewRecipe(newRecipe);
        setNewImage(newImage);
      }

    useEffect(() => {
        fetch("http://localhost:3004/forageables")
        .then (r => r.json())
        .then (data => setForageables(data))

    },[]);
    
  
      
    return (
        <div>

            <ForageablesCollection forageables={forageables} setNewForageable={addForageable}/>
            <AddForm newName={newName} newScientific={newScientific} newRecipe={newRecipe} newImage={newImage}/>
        
        </div>
    )
}

export default ForageablesContainer;
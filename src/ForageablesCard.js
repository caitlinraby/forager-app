import { useHistory } from "react-router-dom";

function ForageablesCard({name, image, recipe, scientific, id, status, setStatus}) {
    
        
    function handleClick (){
        

        fetch(`http://localhost:3004/forageables/` + id, {
            method: "Delete",
        })
        .then (r => r.json())
        .then (data => console.log(data));
        
        }

        let history = useHistory();
        history.push('/home');
        
    return(
        <div>
            <h3>{name}</h3>
            <h4>{scientific}</h4>
            <p>Recipe for {name} {recipe}</p>
            <img src={image} alt={name} width="100px"></img>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ForageablesCard;
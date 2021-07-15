

function ForageablesCard({name, image, recipe, scientific, id, setForageables}) {
        
    function handleClick (){

        fetch(`http://localhost:3004/forageables/` + id, {
            method: "Delete",
        })
        .then (r => r.json())
        .then (data => console.log(data));
        
        
        fetch("http://localhost:3004/forageables")
                .then (r => r.json())
                .then (data => setForageables(data))
    }
    //data down actions up => passing data down from parent to child, pass actions (function) up from child to parent
    //pass foragaeable down all the way to card, give action it can change the data up from the parent (so the parent owns the action and hands it down) The child doesn't mutate state
        
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
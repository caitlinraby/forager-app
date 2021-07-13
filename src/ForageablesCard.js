function ForageablesCard({name, image, recipe, scientific}) {
    function handleClick (){
        // fetch("http://localhost:3004/forageables/", {
        //     method: "Delete",
        // })
        // .then (r => r.json())
        // .then (data => console.log(data))
        }
        
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
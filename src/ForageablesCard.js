function ForageablesCard({name, image, recipe, scientific}) {
    
    return(
        <div>
            <h3>{name}</h3>
            <h4>{scientific}</h4>
            <p>{recipe}</p>
            <img src={image} alt={name}></img>
            <button>Save to Recipe Book!</button>
        </div>
    )
}

export default ForageablesCard;
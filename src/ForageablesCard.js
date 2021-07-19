
import React from 'react';
import "./ForageablesCard.css";



function ForageablesCard({setForageablesCount, forageablesCount, name, image, recipe, scientific, id, forageables, setForageables}) {
    
    function handleClick (){

        fetch(`http://localhost:3004/forageables/` + id, {
            method: "Delete",
        })
        .then (r => r.json())
        .then (data => console.log(data))

        setForageablesCount(forageables.length - 1)

        
        
    }
  
        
    return(
        <div className="card">
            <img  className="f-image" src={image} alt={name}></img>
            <div className="container">
                <h3><b>{name}</b></h3>
                <h4>{scientific}</h4>
                <p>Recipe for {name} {recipe}</p>
                <button className="delete-button" onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default ForageablesCard;
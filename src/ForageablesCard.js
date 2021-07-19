import React from 'react';
import "./ForageablesCard.css";

//import props from ForageablesCollection
//define handleClick callback function to create delete button functionality
//cause forageablesCount to be updated
//return div that creates a card for each forageable in the json server using the values in each object

function ForageablesCard({setForageablesCount, name, image, recipe, scientific, id, forageables}) {

    function handleClick (){
        fetch(`http://localhost:3004/forageables/` + id, {
            method: "Delete",
        })
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
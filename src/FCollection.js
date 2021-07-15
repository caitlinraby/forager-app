import ForageablesCard from "./ForageablesCard";

function ForageablesCollection ({setForageables,forageables}) {
     

    return(
        <div>

            {forageables.map(f => <ForageablesCard setForageables={setForageables} key={f.id} id={f.id} image={f.image} name={f.name} scientific={f.scientific} recipe={f.recipe}/>)}
            
        </div>
    )

}

export default ForageablesCollection;

//destructuring !!
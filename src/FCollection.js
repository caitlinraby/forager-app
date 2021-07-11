import ForageablesCard from "./ForageablesCard";

function ForageablesCollection ({forageables}) {
    console.log(forageables)
    return(
        <div>

            {forageables.map(f => <ForageablesCard key={f.id} forageables={f} image={f.image} name={f.name} scientific={f.scientific} recipe={f.recipe}/>)}
            
        </div>
    )

}

export default ForageablesCollection;
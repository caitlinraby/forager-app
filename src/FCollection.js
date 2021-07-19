import ForageablesCard from "./ForageablesCard";
import './FCollection.css';

function ForageablesCollection ({forageablesCount, setForageablesCount, setForageables,forageables}) {
     

    return(
        <div className="flexbox">

            {forageables.map(f => <ForageablesCard forageablesCount={forageablesCount} setForageablesCount={setForageablesCount} forageables={forageables} setForageables={setForageables} key={f.id} id={f.id} image={f.image} name={f.name} scientific={f.scientific} recipe={f.recipe}/>)}
            
        </div>
    )

}

export default ForageablesCollection;

//destructuring !!
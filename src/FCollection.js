import ForageablesCard from "./ForageablesCard";
import './FCollection.css';

//receives props from ForageablesContainer

function ForageablesCollection ({forageablesCount, setForageablesCount, setForageables,forageables}) {
     
//returns an array of forageable cards for each item in the forageables array
//passes down props to ForageablesCard

    return(
        <div className="flexbox">
            {forageables.map(f => <ForageablesCard forageablesCount={forageablesCount} setForageablesCount={setForageablesCount} forageables={forageables} setForageables={setForageables} key={f.id} id={f.id} image={f.image} name={f.name} scientific={f.scientific} recipe={f.recipe}/>)}
        </div>
    )
}
export default ForageablesCollection;


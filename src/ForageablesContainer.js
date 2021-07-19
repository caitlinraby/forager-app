import { useEffect , useState } from "react";
import ForageablesCollection from "./FCollection.js";


// set state for forageables and forageablesCount with their setter functions
function ForageablesContainer() {
    const [forageables, setForageables] = useState([]);
    const [forageablesCount, setForageablesCount] = useState(-1);
    

    //useEffect hook to setForageables and setForageablesCount whenever forageables or forageablesCount changes
    useEffect(() => {
        if (forageables.length === forageablesCount) return;
            fetch("http://localhost:3004/forageables")
            .then (r => r.json())
            .then (data => setForageables(data))
            setForageablesCount(forageables.length);
    },[forageables, forageablesCount]);
    
    //returns a div with the ForageablesCollection component. 
    //Passes down props and callback functions to ForageablesCollection  
    return (
        <div>
            <ForageablesCollection onChange={setForageables} setForageables={setForageables} forageables={forageables} forageablesCount={forageablesCount} setForageablesCount={setForageablesCount}  />
        </div>
    )
}
export default ForageablesContainer;
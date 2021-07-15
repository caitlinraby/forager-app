import { useEffect , useState } from "react";
import ForageablesCollection from "./FCollection.js";



function ForageablesContainer() {
    const [forageables, setForageables] = useState([]);
    const [forageablesCount, setForageablesCount] = useState(-1);
    

    
    



    useEffect(() => {
    if (forageables.length === forageablesCount) return;
    
        fetch("http://localhost:3004/forageables")
        .then (r => r.json())
        .then (data => setForageables(data))
        setForageablesCount(forageables.length);

    },[forageables, forageablesCount]);
    
    
      
    return (
        <div>

            <ForageablesCollection onChange={setForageables} setForageables={setForageables} forageables={forageables}/>
           
        
        </div>
    )
}

export default ForageablesContainer;
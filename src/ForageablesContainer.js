import { useEffect , useState } from "react";
import ForageablesCollection from "./FCollection.js";



function ForageablesContainer() {
    const [forageables, setForageables] = useState([])
    



    useEffect(() => {
        fetch("http://localhost:3004/forageables")
        .then (r => r.json())
        .then (data => setForageables(data))

    },[]);
    
  
      
    return (
        <div>

            <ForageablesCollection forageables={forageables}/>
           
        
        </div>
    )
}

export default ForageablesContainer;
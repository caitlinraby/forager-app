import { useEffect , useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import AddForm from "./AddForm.js"
import "./App.css"

//set forageables in state here since App is at the top of our hierarchy, so collection and addform have access
//useEffect to fetch forageables and setForageables anytime forageables.length changes

function App() {
  const [forageables, setForageables] = useState([])

  useEffect(() => {
        fetch("http://localhost:3004/forageables")
        .then (r => r.json())
        .then (data => setForageables(data))
    },[forageables.length]);

//return NavBar =>
//routes with switch hook
//return AddForm

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/addform">
          <AddForm forageables={forageables} setForageables={setForageables}/>
        </Route>
        <Route path="/home">
          <Home forageables={forageables}/>
        </Route>
        <Route path="*">
          <h1>404 error: Sorry, page not found!</h1>
        </Route>
      </Switch>
    </div>
  );
}
export default App;

import { useEffect , useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeBook from "./RecipeBook";
import About from "./About";
import "./App.css"

function App() {
  const [page, setPage] = useState("/");

  const [forageables, setForageables] = useState([])

  useEffect(() => {
        fetch("http://localhost:3004/forageables")
        .then (r => r.json())
        .then (data => setForageables(data))

    },[]);

  return (
    <div>
      <NavBar onChangePage={setPage}/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipebook">
          <RecipeBook forageables={forageables}/>
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

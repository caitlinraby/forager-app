import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeBook from "./RecipeBook";
import About from "./About";

function App() {
  const [page, setPage] = useState("/");
    

  return (
    <div>
      <NavBar onChangePage={setPage}/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipebook">
          <RecipeBook />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 error: Sorry, page not found!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

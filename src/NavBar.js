import { Link } from "react-router-dom";
import "./NavBar.css";

//return header
//return navbar links to the 3 routes
function NavBar () {

    return (  
        <nav className="navigation-items">
            <div>
            <h1 id="header">Forager's Recipe Book</h1>
            </div>
            <Link to="/home"><h2>Home🏡</h2></Link>
            <Link to="/addform"><h3>Add to the Collection!</h3></Link>
            <Link to="/about"><h3>About</h3></Link> 
        </nav>
    );
}
export default NavBar;
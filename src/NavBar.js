import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar ({ onChangePage }) {

    return (
        
        <nav className="navigation-items">
            <h1 id="header">Forager's Recipe Book</h1>
            <NavLink to="/home"><b>Home</b></NavLink>
            <NavLink to="/about"><b>About</b></NavLink>
            <NavLink to="/addform"><b>Add to the Collection!</b></NavLink>
        </nav>
    );
}


export default NavBar;
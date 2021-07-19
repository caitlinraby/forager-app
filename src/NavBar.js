import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar ({ onChangePage }) {

    return (
        
        <nav className="navigation-items">
            <h1 id="header">Forager's Recipe Book</h1>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/addform">Add to the Collection!</NavLink>
        </nav>
    );
}


export default NavBar;
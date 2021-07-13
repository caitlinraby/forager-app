import { NavLink } from "react-router-dom";

function NavBar ({ onChangePage }) {

    return (
        
        <nav>
            <h1>Forager's Recipe Book App</h1>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/addform">Add to the Collection!</NavLink>
        </nav>
    );
}


export default NavBar;
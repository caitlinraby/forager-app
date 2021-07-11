import { NavLink } from "react-router-dom";

function NavBar ({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/recipebook">Recipe Book</NavLink>
        </nav>
    );
}


export default NavBar;
import { Link } from "react-router-dom";

function NavBar ({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/recipebook">Recipe Book</Link>
        </nav>
    );
}


export default NavBar;
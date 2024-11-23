import { Link } from "react-router-dom";
import "../../styles/header.css"

function Header() {
    return (
        <header>
            <Link to="/"><h1>Escritos memorables</h1></Link>
        </header>
    )
}

export default Header;
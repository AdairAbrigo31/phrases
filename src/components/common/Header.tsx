import { Link } from "react-router-dom";
import "../../styles/header.css"

function Header() {
    return (
        <header>
            <Link to="/"><h1>Frases memorables</h1></Link>
            <h2>Estos escritos han impactado fuertemente en mí y por esa razón los comparto en este sitio</h2>
        </header>
    )
}

export default Header;
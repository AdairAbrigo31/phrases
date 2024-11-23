import { Link } from "react-router-dom";

function BarCategories() {
    return (
        <>
            <nav style={{display: "flex", justifyContent: "space-around"}}>
                <Link to={"/peliculas"}>Peliculas</Link>
                <Link to={"/libros"}>Libros</Link>
            </nav>
        </>
    )
}

export default BarCategories;
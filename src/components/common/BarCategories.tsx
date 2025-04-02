import { Link } from "react-router-dom";

function BarCategories() {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to={"/peliculas"}><h2>Peliculas</h2></Link>
                <Link to={"/libros"}><h2>Libros</h2></Link>
            </nav>
        </>
    )
}

export default BarCategories;
import { useState } from "react"
import Header from "../components/Header";
import BarCategories from "../components/BarCategories";
import Footer from "../components/Footer";

function MainPage(){
    const [stateMode, setMode] = useState("dark");

    return (
        <>
            <Header></Header>
            <BarCategories></BarCategories>
            <main>
                <h2>Bienvenido a esta pagina</h2>
                <h3>Encontraras las mejores frases</h3>
                <button onClick={() => setMode((stateMode) => stateMode = "ligth")}>Cambiar modo</button>
                <span>La presentación se encuentra en modo {stateMode == "dark" ? "nocturno" : "diurno"}</span>
            </main>
            <Footer></Footer>
        </>
    )
}

export default MainPage;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PeliculasPage from "./pages/PeliculaPage";
import LibroPage from "./pages/LibroPage";
import DetailPhrasePage from "./pages/DetailPhrasePage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/peliculas" element={<PeliculasPage></PeliculasPage>}></Route>
                    <Route path="/libros" element={<LibroPage></LibroPage>}></Route>
                    <Route path="/frase/:phraseID" element={<DetailPhrasePage></DetailPhrasePage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
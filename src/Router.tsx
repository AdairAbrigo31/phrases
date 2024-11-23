import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PeliculasPage from "./pages/PeliculaPage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<MainPage></MainPage>}></Route>
                    <Route path="/peliculas" element={<PeliculasPage></PeliculasPage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
import React from "react";
import BarCategories from "../components/common/BarCategories";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const LayoutPage =  ({children}: {children:React.ReactNode}) => {
    return (
        <>
            <Header></Header>
            <BarCategories></BarCategories>
            {children}
            <Footer></Footer>
        </>
    )
}

export default LayoutPage
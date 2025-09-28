import React from "react";
import BarCategories from "../components/common/BarCategories";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <BarCategories></BarCategories>
      <main className="flex-grow-1">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default LayoutPage;

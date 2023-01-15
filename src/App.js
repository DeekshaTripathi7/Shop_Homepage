import React from "react";
import "./App.css";

import { Navbars } from "./components/Navbars";
import { Header } from "./components/Header";

import { ProductDetails } from "./components/ProductDetails";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbars />
      <Header />
      <ProductDetails />
      <Footer />
    </>
  );
};
export default App;

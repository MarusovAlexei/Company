import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Footer></Footer>
  </React.StrictMode>
);

import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import { ThemeProvider } from "./helpers/providers/ThemeProvider";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Main from "./pages/Main/Main";
import About from "./pages/About/About.jsx";
import Country from "./pages/Country/Country";
import City from "./pages/City/City";
import Company from "./pages/Company/Company";

function App() {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />

              <Route path="/:country?" element={<Country />} />
              <Route path="/:country?/:city?/" element={<City />} />
              <Route path="/:country?/:city/:location?" element={<Company />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

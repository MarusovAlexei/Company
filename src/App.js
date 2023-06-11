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
              <Route path="/Belarus" element={<Country />} />
              <Route path="/Russia" element={<Country />} />
              <Route path="/Georgia" element={<Country />} />
              <Route path="/Azerbaijan" element={<Country />} />
              <Route path="/UAE" element={<Country />} />
              <Route path="/Turkey" element={<Country />} />
              <Route path="/Cyprus" element={<Country />} />
              <Route path="/City" element={<City />} />
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

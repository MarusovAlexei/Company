import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Main from "./pages/Main/Main";
import About from "./pages/About/About.jsx";
import { ThemeProvider } from "./helpers/providers/ThemeProvider";
import Layout from "./components/Layout/Layout";

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
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

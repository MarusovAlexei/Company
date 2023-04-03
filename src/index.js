import React, { StrictMode } from "react";
import "./i18n";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import "./helpers/styles/_variables.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

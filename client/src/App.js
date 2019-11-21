import React from "react";
import "./sass/main.scss";
import { Link } from "react-router-dom";
import Main from "./components/Main";

const App = () => (
  // Header, shows regardless of which page we are on. Links back to '/' (Demands)
  <div className="app">
    <div className="app-container">
      <header className="section">
        <Link to="/">
          <img src={"/xr-logo.png"} className="logo" alt="logo" />
        </Link>
      </header>
      <Main />
    </div>
  </div>
);

export default App;

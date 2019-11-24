import React from "react";
import "./sass/main.scss";
import { Link } from "react-router-dom";
import FooterNav from "./components/FooterNav";
import Routes from "./components/Routes";

const App = () => (
  // Header, shows regardless of which page we are on. Links back to '/' (Demands)
  <>
    <div className="app">
      <div className="app-container">
        <header className="section">
          <Link to="/">
            <img src={"/xr-logo.png"} className="logo" alt="logo" />
          </Link>
        </header>
        <Routes />
      </div>
    </div>
    <FooterNav />
  </>
);

export default App;

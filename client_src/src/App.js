import React from "react";
import "./sass/main.scss";
import { Link } from "react-router-dom";
import FooterNav from "./components/FooterNav";
import Routes from "./components/Routes";

const App = () => (
  <>
    <div className="app">
      {/* Header, shows regardless of which page we are on. Links back to '/' (Factions) */}
      <header>
        <Link to="/">
          <img src={"/xr-logo.png"} className="logo" alt="logo" />
        </Link>
      </header>
      <div className="app-container">
        <Routes />
      </div>
    </div>
    <FooterNav />
  </>
);

export default App;

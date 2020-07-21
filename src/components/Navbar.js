import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <div className="nav-wrapper center-align">
      <button className="button" id="home-button">
        <Link
          to="/"
          className={window.location.pathname === "/" || window.location.pathname === "/home"}
        >
          BIO + SKILLS
      </Link>
      </button>
      <button className="button">
        <Link
          to="/portfolio"
          className={window.location.pathname === "/portfolio"}
        >
          PORTFOLIO
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
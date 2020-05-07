import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row">
      <li className="waves-effect btn">
        <Link
          to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/bio"
          }
        >
          Bio
      </Link>
      </li>
      <li className="waves-effect waves-light btn">
        <Link
        to="/portfolio"
        className={window.location.pathname === "/portfolio"}
        >
          Portfolio
        </Link>
      </li>
    </div>
  );
}

export default Navbar;
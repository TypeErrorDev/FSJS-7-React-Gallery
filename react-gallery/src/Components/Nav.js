/* ==================================
            REACT IMPORTS
===================================== */
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  /* ==================================
           RENDER NAVIGATION
===================================== */
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/airplanes">Airplanes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/Cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/Dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/Computers">Computers</NavLink>
        </li>
      </ul>
    </nav>

    // { WRITE THE NAV BUTTON ROUTES HERE }
  );
};

export default Nav;

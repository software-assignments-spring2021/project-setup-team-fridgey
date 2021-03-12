import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <Link to="/">MyFridge</Link>
      <Link to="/Storage-Time-Search">Storage Time Search</Link>
      <Link to="/Recommendations">Recommendations</Link>
    </nav>
  );
};

export default NavBar;

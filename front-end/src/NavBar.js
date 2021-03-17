import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar from example project
// Links to every site we have
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

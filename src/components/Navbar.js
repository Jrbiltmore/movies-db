import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Movies DB Logo" className="logo"></img>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

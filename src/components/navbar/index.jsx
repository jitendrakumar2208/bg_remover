import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>BGRemover</h2>
      <ul className="menu">
        <li>Convert</li>
        <li>Download</li>
        <li>Remove Bg</li>
      </ul>
    </nav>
  );
};

export default Navbar;

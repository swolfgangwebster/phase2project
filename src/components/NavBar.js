import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "150px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "orange",
    textDecoration: "none",
    color: "Black",
    borderRadius: 10,
  };

function NavBar() {
  return <div className="navbar">
    <NavLink style={linkStyles} to="/">Home</NavLink>
    <NavLink style={linkStyles} to="/LangForm">Add language</NavLink>
    <NavLink style={linkStyles} to="/Family">Family</NavLink>
  </div>;
}

export default NavBar;

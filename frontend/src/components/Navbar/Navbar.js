import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const logoutUser = async (e) => {
    e.preventDefault();

    await fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" className="nlogo">
          Crypto
        </NavLink>{" "}
      </div>

      <ul
        className={click ? "nav-link-button" : "nav-links"}
        onClick={() => setClick(false)}
      >
        <li className="nav-items">
          <NavLink exact to="/" key="1" className="nav-icon">
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink exact to="/Signin" key="2" className="nav-icon">
            Login
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink exact to="/Signup" key="3" className="nav-icon">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-items">
          <a className="nav-icon" href="" onClick={logoutUser}>
            Log Out
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        className="hamburger-menu"
        onClick={() => setClick(!click)}
        icon={click ? faTimes : faBars}
      />
    </nav>
  );
}

export default NavBar;

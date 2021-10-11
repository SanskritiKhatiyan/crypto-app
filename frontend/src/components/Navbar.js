import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <NavLink class="nav-link" to="/signin">
                Login
              </NavLink>
            </li> */}
            <li class="nav-item">
              <NavLink class="nav-link" to="/signup">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

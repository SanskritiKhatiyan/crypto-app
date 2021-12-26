import React, { useState,  createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ContextUser } from "../../App";
// import {UserContext} from "../Signin/Signin";

const NavBar = () => {
  const { state, dispatch } = useContext(ContextUser);
  const history = useHistory();
  const [click, setClick] = useState(false);
  // const user = useContext(UserContext);

  const username= window.sessionStorage.getItem("name"); 

  const logoutUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = response.json();
    if (response.status === 200) {
      dispatch({ type: "USER", payload: false });
      window.alert("User Logged Out Successfully. 😊😊");
      // window.sessionStorage.removeItem("name");
      history.push("/signin");
    } else {
      window.alert("Someting went wrong. 💣💣");
    }
  };

// console.log(user);

  // console.log(username);
  const RenderNavBar = () => {
    if (state) {
      return (
        <>
          <li className="nav-items">
            <NavLink exact to="/" key="1" className="nav-icon">
              Home
            </NavLink>
          </li>

          {/* <li className="nav-items">
            <a className="nav-icon" >
              {user}
            </a>
          </li> */}

          <li className="nav-items">
            <a className="nav-icon" >
              {username}
            </a>
          </li>


          <li className="nav-items">
            <a className="nav-icon" href="" onClick={logoutUser}>
              Log Out
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-items">
            <NavLink exact to="/" key="1" className="nav-icon">
              Home
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink exact to="/signin" key="1" className="nav-icon">
              Sign In
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink exact to="/signup" key="1" className="nav-icon">
              Sign Up
            </NavLink>
          </li>
        </>
      );
    }
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
        <RenderNavBar />
      </ul>

      <FontAwesomeIcon
        className="hamburger-menu"
        onClick={() => setClick(!click)}
        icon={click ? faTimes : faBars}
      />
    </nav>
  );
};

export default NavBar;

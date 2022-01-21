import React, { useState, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ContextUser } from "../../App";
import Notification from "../Notification";

const NavBar = () => {
  const { state, dispatch } = useContext(ContextUser);
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [notify , setnotify] = useState({
    isOpen:false, 
    message: "", 
    type: ""
  });
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
      // dispatch({ type: "USER", payload: false });
      // window.alert("User Logged Out Successfully. 😊😊");
      setnotify({
        isOpen:true,
        message:"Logout Successfully",
        type:"success"
      })
      localStorage.removeItem("UserName");
      history.push("/signin");
    } else {
      // window.alert("Someting went wrong. 💣💣");
      setnotify({
        isOpen:true,
        message:"Someting went wrong. 💣💣",
        type:"error"
      })
    }
    window.location.reload(false);
  };

  const RenderNavBar = () => {
    const userName = localStorage.getItem("UserName");

    if (state || userName) {
      return (
        <>
          <li className="nav-items">
            <a className="nav-icon" id="color_username">
              {userName}
            </a>
          </li>

          <li className="nav-items">
            <NavLink exact to="/" key="1" className="nav-icon">
              Home
            </NavLink>
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
    <>
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" className="nlogo">
          Crypto
        </NavLink>
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
     <Notification 
     notify = {notify}
     setnotify = {setnotify}
     />
     </>
  );
};

export default NavBar;

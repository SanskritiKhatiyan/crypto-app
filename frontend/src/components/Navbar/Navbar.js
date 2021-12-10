
<<<<<<< HEAD
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
=======
// import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home1 from "../Home1/Landingpage1";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <NavLink class="navbar-brand" to="/">
//           Navbar
//         </NavLink>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <NavLink class="nav-link" to="/">
//                 Home <span class="sr-only">(current)</span>
//               </NavLink>
//             </li>
//             <li class="nav-item">
//               <NavLink class="nav-link" to="/about">
//                 About
//               </NavLink>
//             </li>
//             {/* <li class="nav-item">
//               <NavLink class="nav-link" to="/signin">
//                 Login
//               </NavLink>
//             </li> */}
//             <li class="nav-item">
//               <NavLink class="nav-link" to="/signup">
//                 Register
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
>>>>>>> 0b6a726f928abebdaa5340aec00e353e109b14aa
import "./Navbar.css";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD
function NavBar() {
  const [click, setClick] = useState(false);
  const NavMenuItems = [
    {
      id:"1",
      url:"/",
      menu:"Home",
      cname:"nav-icon"
=======
// import "./Navbar.css"
// import NavIcon from "./NavIcon";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const NavMenuItems = [
    {
      id: "1",
      url: "/",
      menu: "Home",
      cname: "nav-menu",
>>>>>>> 0b6a726f928abebdaa5340aec00e353e109b14aa
    },
    {
      id: "2",
      url: "/Signin",
      menu: "Login",
      cname: "nav-icon",
    },

    {
      id: "3",
      url: "/Signup",
      menu: "Sign Up",
      cname: "nav-icon",
    }
  ];

  const handleClick = () => setClick(!click);
  return (
<<<<<<< HEAD
  
      <nav className="navbar">
        <div className="nav-logo"><NavLink to="/" className="nlogo" >
            Crypto
          </NavLink> </div>
          {/* <h2 className="nav-logo">Crypto</h2> */}
           <ul className={click ? "nav-link-button": "nav-links"} 
          onClick={()=>setClick(false)} >
          
          {NavMenuItems.map(({ id, url, cname, menu }) => (
            
            <li className="nav-items">
                 <NavLink  exact to={url} key={id} className={cname}   >{menu}</NavLink> 
            </li>
          ))}
        </ul>
           
          

     <FontAwesomeIcon  className="hamburger-menu" onClick={() =>setClick(!click)}
             icon={click ? faTimes : faBars}/> 


          
=======
    <div>
      <nav className="nav-main">
        <div className="logoo">
          {/* <h>Crypto </h> */}
          <a className="title" href="/">
            {" "}
            Crypto{" "}
          </a>
          {/* <NavLink to="/" > CRYPTO </NavLink> */}
        </div>

        {/* <NavIcon/> */}
        <ul className="nav-items">
          {NavMenuItems.map(({ id, url, cname, menu }) => (
            <li>
              {/* <a href={url} className={cname}>{menu}</a> */}
              <NavLink to={url} className={cname}>
                {menu}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
              </a>
              
              </div> */}
        <div className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
          <a href="#" onClick={() => setClick(!click)}></a>
        </div>
>>>>>>> 0b6a726f928abebdaa5340aec00e353e109b14aa
      </nav>
    
  );
};

export default NavBar;
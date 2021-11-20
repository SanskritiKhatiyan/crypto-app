// import React from "react";
// import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Link,NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'






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
import { useState } from "react";
import "./Navbar.css"
// import NavIcon from "./NavIcon";

function NavBar(props) {
  // const[click,setclick]=useState(false);
  
  const NavMenuItems = [
    {
      id:"1",
      url:"/Home",
      menu:"HOME",
      cname:"nav-menu"
    },
    {
      id: "2",
      url: "/Login",
      menu: "LOGIN",
      cname: "nav-menu",
    },

    {
      id: "3",
      url: "/Signup",
      menu: "SIGN UP",
      cname: "nav-menu",
    },
    {
      id: "4",
      url: "#",
      menu: "ABOUT",
      cname: "nav-menu",
    },
  ];
  return (
    <div>
      <nav className="nav-main">
        <label className="logo">
          <NavLink to="/Home">Crypto </NavLink>
        </label>
         
        {/* <NavIcon/> */}
        <ul className="nav-items">
          {NavMenuItems.map(({ id, url, cname, menu }) => (
            
            <li>
                
                
                <NavLink to={url} className={cname}>{menu}</NavLink>
                
            </li>
          ))}
        </ul>
        <div className="hamburger-menu">
          
          <FontAwesomeIcon icon={["fas", "coffee"]} />
          

        </div>
      </nav>
    </div>
  );
}

export default NavBar;

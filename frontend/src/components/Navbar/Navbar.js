
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


// const response = await fetch("/sign-in", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
    
//   }),
// });

// const data = response.json();

function NavBar() {
  const [click, setClick] = useState(false);
  const NavMenuItems = [
    // {
    //   id:"4",
    //   url:"#",
    //   menu: data.name,
    //   cname:"nav-icon"
    // },
    {
      id:"1",
      url:"/",
      menu:"Home",
      cname:"nav-icon"
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


          
      </nav>
    
  );
};

export default NavBar;
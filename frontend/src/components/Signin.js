// import React from "react";
// import "./Signin.css";

// const Signin = () => {
//   return (
//     <div className="login">
// <form>
//   <label htmlFor="chk" aria-hidden="true">Login</label>
//   <input type="email" name="email" placeholder="Email" required />
//   <input type="password" name="pswd" placeholder="Password" required />
//   <button>Login</button>
// </form>
// </div>
//   );
// };

// export default Signin;

// import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import "./Signup.css";
// const Signin = () => {
//   const [addclass, setaddclass] = useState("");
//   return (
//     <div className={`container ${addclass}`} id="container">
//       <div className="form-container  sign-up-container">
//         <form>
//           <h1>Create Account</h1>
//           <input type="text" placeholder="NAME" />
//           <input type="email" placeholder="EMAIL" />
//           <input type="password" placeholder="PASSWORD" />
//           <input type="password" placeholder="CONFIRM PASSWORD" />
//           <button type="submit">REGISTER</button>
//         </form>
//       </div>
//       <div className="form-container sign-in-container">
//         <form>
//           <h1>Login</h1>
//           <input type="email" placeholder="EMAIL" />
//           <input type="password" placeholder="PASSWORD" />
//           <button type="submit">LOGIN</button>
//         </form>
//       </div>
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//               <NavLink to="/signin">
//             <button
//               className="ghost"
//               id="signIn"
//               onClick={() => setaddclass("")}
//             >
//               GO TO LOGIN
//             </button>
//             </NavLink>
//           </div>
//           <div className="overlay-panel overlay-right">
//               <NavLink to="/signup">
//             <button
//               className="ghost"
//               id="signUp"
//               onClick={() => setaddclass("right-panel-active")}
//             >
//               GO TO REGISTER
//             </button>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default Signin;

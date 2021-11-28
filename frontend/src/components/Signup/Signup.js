// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import "./Signup.css";
// const Signup = () => {
//   const history = useHistory();
//   /*<============================= For Signup Functionality =========================>*/
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });

//   let name, value;
//   const handleEvents = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     setUser({ ...user, [name]: value });
//   };

//   const sendData = async (e) => {
//     e.preventDefault();

//     const { name, email, password, passwordConfirm } = user;

//     const response = await fetch("/sign-up", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         passwordConfirm,
//       }),
//     });

//     const data = await response.json();
//     console.log(data);
//     if (data.statusCode === 422 || !data) {
//       window.alert("Registration Unsuccessfull 😢😢" + data.error);
//       console.log("Registration Unsuccessfull 😢😢");
//     } else {
//       window.alert("Registration Successfull 🔥🔥");
//       console.log("Registration Successfull 🔥🔥");
//     }
//   };

//   /*<============================= For Signin Functionality =========================>*/
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signinUser = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/sign-in", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     const resData = await res.json();
//     console.log(resData);
//     if (resData.statusCode === 422 || !resData) {
//       window.alert("Login Unsuccessfull 😢😢" + resData.error);
//       console.log("Login Unsuccessfull 😢😢");
//     } else if (resData.statusCode === 400) {
//       window.alert("Error", resData.error);
//       console.log("Error");
//     } else {
//       window.alert("User Login Successfully! 🔥🔥");
//       console.log("User Login Successfully! 🔥🔥");
//       history.push("/");
//     }
//   };

//   const [addclass, setaddclass] = useState("");
//   return (
//     <div className={`container ${addclass}`} id="container">
//       <div className="form-container  sign-up-container">
//         <form method="POST" id="register-from">
//           <h1>Create Account</h1>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="NAME"
//             value={user.name}
//             onChange={handleEvents}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="EMAIL"
//             value={user.email}
//             onChange={handleEvents}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="PASSWORD"
//             value={user.password}
//             onChange={handleEvents}
//             required
//           />
//           <input
//             type="password"
//             name="passwordConfirm"
//             id="passwordConfirm"
//             placeholder="CONFIRM PASSWORD"
//             value={user.passwordConfirm}
//             onChange={handleEvents}
//             required
//           />
//           <button type="submit" name="signup" onClick={sendData}>
//             REGISTER
//           </button>
//         </form>
//       </div>
//       <div className="form-container sign-in-container">
//         <form method="POST" id="login-form">
//           <h1>Login</h1>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="EMAIL"
//           />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="PASSWORD"
//           />
//           <button type="submit" name="signin" id="signin" onClick={signinUser}>
//             LOGIN
//           </button>
//         </form>
//       </div>
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <button
//               className="ghost"
//               id="signIn"
//               onClick={() => setaddclass("")}
//             >
//               GO TO LOGIN
//             </button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <button
//               className="ghost"
//               id="signUp"
//               onClick={() => setaddclass("right-panel-active")}
//             >
//               GO TO REGISTER
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="body_wrapper">
    <div class="container_signin" >
	<div class="form-container sign-in-container">
		<form action="#" className="form_css">
			<h1 id="title">Crypto App</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			
			<button id="signin" >Sign Up</button>
			<p id="lower_title"> Crypto App</p> 
		</form>
		
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				
			</div>
		</div>
	</div>
</div>
</div>
  );
};

export default Signup;

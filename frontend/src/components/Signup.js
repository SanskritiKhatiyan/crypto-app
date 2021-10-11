// import React, { useState } from "react";
// import Signin from "./Signin";
// import "./Signup.css";

// const Signup = () => {
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

//   const SendData = async (e) => {
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

//   return (
//     <div className="main">
//       <div className="signup">
//         <form method="POST" id="register-form">
//           <label htmlFor="chk" aria-hidden="true">
//             Sign up
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Your Name"
//             value={user.name}
//             onChange={handleEvents}
//             autoComplete="off"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Your Email"
//             value={user.email}
//             onChange={handleEvents}
//             autoComplete="off"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Your Password"
//             value={user.password}
//             onChange={handleEvents}
//             autoComplete="off"
//             required
//           />
//           <input
//             type="password"
//             name="passwordConfirm"
//             id="passwordConfirm"
//             placeholder="Confirm Your Password"
//             value={user.passwordConfirm}
//             onChange={handleEvents}
//             autoComplete="off"
//             required
//           />
//           <button type="submit" name="signup" onClick={SendData}>
//             Sign up
//           </button>
//         </form>
//       </div>
//       <Signin />
//     </div>
//   );
// };
import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  let name, value;
  const handleEvents = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = user;

    const response = await fetch("/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.statusCode === 422 || !data) {
      window.alert("Registration Unsuccessfull 😢😢" + data.error);
      console.log("Registration Unsuccessfull 😢😢");
    } else {
      window.alert("Registration Successfull 🔥🔥");
      console.log("Registration Successfull 🔥🔥");
    }
  };

  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form method="POST" id="register-from">
          <h1>Create Account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            value={user.name}
            onChange={handleEvents}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            value={user.email}
            onChange={handleEvents}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={user.password}
            onChange={handleEvents}
            required
          />
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="CONFIRM PASSWORD"
            value={user.passwordConfirm}
            onChange={handleEvents}
            required
          />
          <button type="submit" name="signup" onClick={sendData}>
            REGISTER
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

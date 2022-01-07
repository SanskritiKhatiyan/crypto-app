import React, { useState, useContext } from "react";
import "./Signin.css";
import LoginImage from "../../assets/Signin.svg";
import { useHistory, NavLink } from "react-router-dom";
import { ContextUser } from "../../App";

var userName;

const Signin = () => {
  const { state, dispatch } = useContext(ContextUser);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    var data = await response.json();
    console.log(data);
    userName = data.name;

    console.log(response.status);
    if (response.status === 400) {
      window.alert("User not found! ☹☹");
    } else if (response.status === 401 || !data) {
      window.alert("Invalid Credentials! ☹☹");
    } else if (response.status === 200) {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful 🔥🔥");
      history.push("/");
    } else {
      window.alert("Please fill all the fields properly!!!");
    }
  };

  return (
    <div className="body_wrapper">
      <div class="container_signin">
        <div class="form-container sign-in-container">
          <form method="POST" className="form_css">
            <h1 id="title">Crypto</h1>
            <div className="sign_input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            </div>
            <NavLink to="/forgotPassword" className="pass_forget">
              Forgot your password?
            </NavLink>
            
            <button id="signin" onClick={loginUser}>
              Sign In
            </button>
            
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={LoginImage} alt="loginImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { userName };

export default Signin;

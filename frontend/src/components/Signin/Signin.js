import React, { useState } from "react";
import "./Signin.css";
import LoginImage from "../../assets/loginimage1.svg";
import { useHistory } from "react-router-dom";

const Signin = () => {
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

    const data = response.json();

    if (response.status === 400 || !data) {
      window.alert("Invalid Credentials ☹☹");
    } else if (response.status === 200) {
      window.alert("Login Successfully 🔥🔥");
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
            <a href="#" className="pass_forget">
              Forgot your password?
            </a>
            <button id="signin" onClick={loginUser}>
              Sign In
            </button>
            <p id="lower_title"> Crypto</p>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={LoginImage} alt="loginImage" />
              {/* <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

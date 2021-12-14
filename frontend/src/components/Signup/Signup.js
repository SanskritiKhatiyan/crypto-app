import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const history = useHistory();

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

    const res = await fetch("/sign-up", {
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

    const resData = await res.json();
    console.log(resData);
    if (resData.statusCode === 422 || !resData) {
      window.alert("Registration Unsuccessfull 😢😢" + resData.error);
      console.log("Registration Unsuccessfull 😢😢");
    } else if (resData.statusCode === 400) {
      window.alert("Error", resData.error);
      console.log("Error");
    } else {
      window.alert("User Registration Successfully! 🔥🔥");
      console.log("User Registration Successfully! 🔥🔥");
      history.push("/");
    }
  };

  return (
    <div className="body_wrapper">
      <div class="container_signin">
        <div class="form-container sign-in-container">
          <form
            method="POST"
            id="register-form"
            action="#"
            className="form_css"
          >
            <h1 id="title">Crypto App</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>

            <input
              type="name"
              name="name"
              id="name"
              value={user.name}
              onChange={handleEvents}
              required
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleEvents}
              required
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleEvents}
              placeholder="Password"
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

            <button type="submit" name="signup" onClick={sendData} id="signin">
              Sign Up
            </button>
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

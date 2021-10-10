import React, { useState } from "react";
import Signin from "./Signin";
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

  const SendData = async (e) => {
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

  return (
    <div className="main">
      <div className="signup">
        <form method="POST" id="register-form">
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={user.name}
            onChange={handleEvents}
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={user.email}
            onChange={handleEvents}
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            value={user.password}
            onChange={handleEvents}
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirm Your Password"
            value={user.passwordConfirm}
            onChange={handleEvents}
            autoComplete="off"
            required
          />
          <button type="submit" name="signup" onClick={SendData}>
            Sign up
          </button>
        </form>
      </div>
      <Signin />
    </div>
  );
};

export default Signup;

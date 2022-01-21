import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Signinimage from "../../assets/Signup.svg";
import "./Signup.css";
import Notification from "../Notification";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [notify , setnotify] = useState({
    isOpen:false, 
    message: "", 
    type: ""
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
      // window.alert("Registration Unsuccessful 😢😢" + resData.error);
      // console.log("Registration Unsuccessful 😢😢");
      setnotify({
        isOpen:true,
        message:"Registration Unsussessfull",
        type:"error"
      })
    } else if (resData.statusCode === 400) {
      // window.alert("Error", resData.error);
      setnotify({
        isOpen:true,
        message:"Error",
        type:"error"
      })
      console.log("Error");
    } else {
      // window.alert("User Registration Successfull! 🔥🔥");
      // console.log("User Registration Successfull! 🔥🔥");
      setnotify({
        isOpen:true,
        message:"User Resgistered",
        type:"success"
      })
      history.push("/signin");
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
            <h1 id="signup_title">Crypto</h1>
            <div className="sign_input">
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
          </div>
            <button type="submit" name="signup" onClick={sendData} id="signin">
              Sign Up
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={Signinimage} alt="Singnin" />
            </div>
          </div>
          <Notification 
      notify = {notify}
      setnotify = {setnotify}
      />
        </div>
      </div>
    </div>
  );
};

export default Signup;

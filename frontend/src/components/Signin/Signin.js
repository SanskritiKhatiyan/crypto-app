import React, { useState, useContext } from "react";
import "./Signin.css";
import LoginImage from "../../assets/Signin.svg";
import { useHistory, NavLink } from "react-router-dom";
import { ContextUser } from "../../App";
import Notification from "../Notification";
var userName;

const Signin = () => {
  const { state, dispatch } = useContext(ContextUser);
  const [notify, setnotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
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
      // window.alert("User not found! ☹☹");
      setnotify({
        isOpen: true,
        message: "User not found! ☹☹",
        type: "error",
      });
    } else if (response.status === 401 || !data) {
      // window.alert("Invalid Credentials! ☹☹");
      setnotify({
        isOpen: true,
        message: "Invalid Credentials! ☹☹",
        type: "error",
      });
    } else if (response.status === 200) {
      localStorage.setItem("UserName", data.name);
      dispatch({ type: "USER", payload: true });
      // window.alert("Login Successful 🔥🔥");
      setnotify({
        isOpen: true,
        message: "Login Successfully",
        type: "success",
      });
      history.push("/");
    } else {
      // window.alert("Please fill all the fields properly!!!");
      setnotify({
        isOpen: true,
        message: "Please fill all the fields properly!!!",
        type: "error",
      });
    }
  };

  return (
    <div className="body_wrapper">
      <div class="container_signin">
        <div class="form-container sign-in-container">
          <form method="POST" className="form_css">
            <h1 id="title">Crypto</h1>
            <div className="sign_input">
              <div className="email_field">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="password_field">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <NavLink to="/forgotPassword" className="pass_forget">
              Forgot your password?
            </NavLink>

            <button id="signin" onClick={loginUser}>
              Sign In
            </button>
            <p className="demo_id">
              Demo Email-id : demo@gmail.com
              <br />
              Demo Password : 12345678
            </p>
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
      <Notification notify={notify} setnotify={setnotify} />
    </div>
  );
};

export { userName };

export default Signin;

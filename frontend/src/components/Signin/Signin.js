import React, { useState, useContext , createContext} from "react";
import "./Signin.css";
import LoginImage from "../../assets/Signin.svg";
import { useHistory, NavLink } from "react-router-dom";
import { ContextUser } from "../../App";

// export const UserContext = createContext();

const Signin = () => {
  const { state, dispatch} = useContext(ContextUser);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [User, setUser] = useState();

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

    // const userName= response.name;
    console.log(response.status);
    if (response.status === 400 || !data) {
      window.alert("Invalid Credentials ☹☹");
    } else if (response.status === 200) {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful 🔥🔥");
      window.sessionStorage.setItem("name", data.name);
      // setUser(data.name);
      history.push("/");
    } else {
      window.alert("Please fill all the fields properly!!!");
    }
  };

  return (
    // <UserContext.Provider value={user}>
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
              {/* <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </UserContext.Provider>
  );
};

export default Signin;

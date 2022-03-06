import React, { useState } from "react";
import "./ForgotPassword.css";
import Forgotimg from "../../assets/forgot-passw.svg";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const forgotPassword = async (e) => {
    e.preventDefault();

    const response = await fetch("/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = response.json();

    if (response.status === 404) {
      window.alert("There is no user with this email address ☹☹");
    } else {
      window.alert("Recovery Token Sent 🔥🔥");
      history.push("/signin");
    }
  };

  return (
    <div className="body_wrapper">
      <div class="container_signin">
        <div class="form-container sign-in-container">
          <form method="POST" className="form_css">
            <h1 id="title">Crypto</h1>
            <div className="forgotpass_input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <button id="forgotpass__button">Submit</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={Forgotimg} alt="forgotpassword" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import "./ForgotPassword.css";
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
    <div>
      <input
        type="email"
        value={email}
        placeholder="name@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="button" className="forgotpass" onClick={forgotPassword}>
        Forgot Password
      </button>
    </div>
  );
};

export default ForgotPassword;

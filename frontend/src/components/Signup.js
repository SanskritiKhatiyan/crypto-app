import React from "react";
import "./Signup.css";
import "../assets/1.jpg";

const Signup = () => {
  return (
    <div className="main">
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <input type="password" name="pswd" placeholder="Confirm Password" required />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
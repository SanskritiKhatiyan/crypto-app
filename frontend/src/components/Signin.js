import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="login">
<form>
  <label htmlFor="chk" aria-hidden="true">Login</label>
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="pswd" placeholder="Password" required />
  <button>Login</button>
</form>
</div>
  );
};

export default Signin;

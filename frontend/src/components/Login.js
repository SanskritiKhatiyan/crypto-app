import "./Signup.css";
import React from "react";
function Login() {
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
}

export default Login;

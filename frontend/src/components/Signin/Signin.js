import React from "react";
import "./Signin.css";
import LoginImage from "../../assets/loginImage.svg";

const Signin = () => {
  return (
    <div className="body_wrapper">
      <div class="container_signin">
        <div class="form-container sign-in-container">
          <form action="#" className="form_css">
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

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="pass_forget">
              Forgot your password?
            </a>
            <button id="signin">Sign In</button>
            <p id="lower_title"> Crypto App</p>
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
  );
};

export default Signin;

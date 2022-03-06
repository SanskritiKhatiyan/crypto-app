import React from "react";
import "./error404.css";
import error404img from "../../assets/404error.svg";

const Error404 = () => {
  return (
    <div className="error__container">
      <div className="error__subContainer">
        <div className="error-parent">
          <div className="error404-img">
            <img src={error404img} alt="error404" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;

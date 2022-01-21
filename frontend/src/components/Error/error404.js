import React from "react";
import "./error404.css";
import error404img from "../../assets/error404img.svg";

const error404 = () => {
  return (
    <div className="error-parent">
      <div className="error404-img">
        <img src={error404img} alt="error404" />
      </div>
    </div>
  );
};

export default error404;

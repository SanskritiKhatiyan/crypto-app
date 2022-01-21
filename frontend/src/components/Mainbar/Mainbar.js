import React from "react";
import { NavLink } from "react-router-dom";
import "./Mainbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mainbar = () => {
  return (
    <div className="main-bar">
      <div className="main-bar__container">
        <NavLink to={"/news"} className="main-bar__container__link span">
          <FontAwesomeIcon icon="newspaper" />
          <a className="hidden">.</a>
          News
        </NavLink>
        <NavLink to={"/coins"} className="main-bar__container__link span">
          <FontAwesomeIcon icon="coins" />
          <a className="hidden">.</a>
          Coins
        </NavLink>
        <NavLink to={"/watchlist"} className="main-bar__container__link span">
          <FontAwesomeIcon icon="eye" />
          <a className="hidden">.</a>
          Watch List
        </NavLink>
      </div>
    </div>
  );
};

export default Mainbar;

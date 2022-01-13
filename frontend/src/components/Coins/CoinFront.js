import React from 'react'
import Mkt_Desc from "./CoinFront/CoinFront1"

import { NavLink } from "react-router-dom";
import "./CoinFront.css"

const CoinFront = () => {
  return (
    <>
    <NavLink to="/coins">
              <div className="show-more_button">
                Show More
              </div>
            </NavLink>
    <Mkt_Desc />
    
    
    </>
  )
}

export default CoinFront

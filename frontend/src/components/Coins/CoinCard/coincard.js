import React, { useState } from "react";
import logo from "./1.png";
import icon from "./img/icon.svg";
import "./coincard.css";

function makeDog(e) {
  e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
  e.target.setAttribute('alt', 'dog');
}


const App = (props) => {
  return (
    <div id="card">
      <div className="top">
        <p id="heading">{props.name}</p>
        <div className="image-crop">
          <img id="img_id" src={props.image} alt="" />
        </div>
      </div>
      <div className="middle">
        <p>{props.currentPrice}</p>
        <p>{props.marketCap}</p>
        <p>Anything</p>
      </div>

      <div id="buttons">
        <button>
        <img src="{logo}" alt="cat" onClick={makeDog}/>
  
        </button>
      </div>
    </div>
  );
};

export default App;

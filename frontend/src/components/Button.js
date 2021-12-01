import React from 'react';
import "./Coins/CoinData.css";

function watchlist(e) {
    e.target.setAttribute( 'src', 'https://img.icons8.com/ios-filled/20/000000/double-tick.png');
    e.target.setAttribute('alt', 'tick');
    // addCointoWatchlist(coin);
  }

const Button = () => {
    return (
        <div id="buttons">
            <button>
        <img src="https://img.icons8.com/material-outlined/24/000000/plus--v2.png" alt="plus" onClick={watchlist}/>
  
        </button>
        </div>
    )
}

export default Button

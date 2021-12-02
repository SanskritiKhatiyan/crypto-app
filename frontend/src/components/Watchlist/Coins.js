import React from 'react';
import CoinControls from "./CoinControls"; 

const Coins = ({coin, type}) => {
    return (
        <div>
            <img src={coin.image} alt=""> </img>

            <CoinControls type={type} coin={coin} />
        </div>
    )
}

export default Coins;

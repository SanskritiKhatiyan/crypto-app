import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';
import Button from '../Button';

const Resultcard = ({coin}) => {
    const {
        addCoinToWatchlist,
        watchlist
    }= useContext(GlobalContext);

    let storedCoin= watchlist.find((c) => c.id=== coin.id);

    const watchlistDisabled= storedCoin? true: false;

    return (
        <div>
            <div>
            {coin.name}
            {coin.image}
            </div>
            <div>
                <Button 
                disabled= {watchlistDisabled}
                onClick={()=> addCoinToWatchlist(coin)} />
            </div>
        </div>
        
    )
    
}

export default Resultcard;

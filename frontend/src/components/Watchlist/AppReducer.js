export default (state, action) =>{
    switch(action.type){
        case "ADD_COIN_TO_WATCHLIST":
            return{
                ...state,
                watchlist:[action.payload, ...state.watchlist],
            };
        case "REMOVE_COIN_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter((coin)=> coin.id!==action.payload),
            };
        default:
        return state;
    }
};
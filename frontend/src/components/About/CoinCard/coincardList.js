import "./CoinCardList.css"
// import up_arrow from "./img/up-arrow.png";
// import down_arrow from "./img/down-arrow.png";
// import Button from "../../Button";

function watchlist(e) {
  e.target.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/20/000000/double-tick.png"
  );
  e.target.setAttribute("alt", "tick");
  console.log("I GOT CLICKED")
  // addCointoWatchlist(coin);
}

const App = (props) => {
  return (
    // <div id="card">
    //   <div className="top">
    //     <p id="heading">{props.name}</p>
    //     <div className="image-crop">
    //       <img id="img_id" src={props.image} alt="" />
    //     </div>
    //   </div>
    //   <div className="middle">
    //     <p>
    //       Market Cap{" "}
    //       <p className="mkt_cap">
    //         <a>₹</a>
    //         <a className="hidden">.</a>
    //         {(props.marketCap / 1000000000).toFixed(0)} Cr
    //       </p>
    //     </p>
    //     <p>
    //       Price
    //       <p className="price">
    //         {" "}
    //         <a>₹</a>
    //         <a className="hidden">.</a> {props.currentPrice}
    //       </p>
    //     </p>
    //     {/* <p></p> */}
    //     {props.Percentage < 0 ? (
    //       <p>
    //         24h Change
    //         <p className="red">{props.Percentage.toFixed(2)}%</p>
    //         {/* <img src={down_arrow} alt="decrease arrow" /> */}
    //       </p>
    //     ) : (
    //       <p>
    //         24h Change
    //         <p className="green">{props.Percentage.toFixed(2)}%</p>
    //         {/* <img src={up_arrow} alt="increase arrow" /> */}
    //       </p>
    //     )}
    //   </div>

    <div className="coin_container">
          <div className="coin_row">
            <div className="coin">
            <img src={props.image} className="coin_img" />
            <p className="coin_h1">{props.name}</p>

            <div className="coin_data">
              <p className="coin_price">₹{props.currentPrice}</p>
              <p className="coin_marketcap">
              {/* ₹{(props.marketCap).toFixed(0)}T */}
              {/* {props.marketCap < 1000000000 ?(
                {(props.marketCap/1000000000000).toFixed(0)}
              ) : (
                {(props.marketCap/10000000000).toFixed(0)}
              )} */}

              
          {props.marketCap < 10000000000 ? (
          <p>
            <p>₹{(props.marketCap/1000000000).toFixed(0)}M</p>
           
          </p>
        ) : (
          <p>
            <p>₹{(props.marketCap/1000000000).toFixed(0)}B</p>
            
          </p>
        )}

              
                
              </p>
              {props.Percentage < 0 ? (
                <p className="coin_percent red">
                  {props.Percentage.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent green">
                  +{props.Percentage.toFixed(2)}%
                </p>
              )}
               </div>
               <p className="coin_high">
                ₹{props.High24}
              </p> 
              <p className="coin_low">
                ₹{props.Low24}
              </p> 
              {props.Price7d < 0 ?(
              <p className="coin_7d red">
               {props.Price7d.toFixed(0)}%
              </p> 
              ) : (
                <p className="coin_7d green">
               +{props.Price7d.toFixed(0)}%
              </p> 
              )}

              {props.Price30d < 0 ? (
              <p className="coin_30d red">
               {props.Price30d.toFixed(0)}%
              </p> 
              ) : (
                <p className="coin_30d green">
               +{props.Price30d.toFixed(0)}%
              </p>
              )
            }
              {/* <p className="coin_200d">
               ₹{props.Price200d}
               
              </p>  */}
            
              
              {/* <Button></Button> */}
      <div id="buttonsList">

<button>
  
  <img src="https://img.icons8.com/material-outlined/24/000000/plus--v2.png" alt="plus" onClick={watchlist}/>
    
  </button>
</div>
              
          </div>
        </div>

      
    </div>
  );
};

export default App;

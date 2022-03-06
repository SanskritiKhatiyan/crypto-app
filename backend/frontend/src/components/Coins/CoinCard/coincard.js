import "./coincard.css";

function watchlist(e) {
  e.target.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/20/000000/double-tick.png"
  );
  e.target.setAttribute("alt", "tick");
  console.log("I GOT CLICKED");
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
        <p>
          Market Cap
          <p className="mkt_cap">
            <a>₹</a>
            <a className="hidden">.</a>
            {(props.marketCap / 1000000000).toFixed(0)} Cr
          </p>
        </p>
        <p>
          Price
          <p className="price">
            {" "}
            <a>₹</a>
            <a className="hidden">.</a> {props.currentPrice}
          </p>
        </p>
        {/* <p></p> */}
        {props.Percentage < 0 ? (
          <p>
            24h Change
            <p className="red">{props.Percentage.toFixed(2)}%</p>
            {/* <img src={down_arrow} alt="decrease arrow" /> */}
          </p>
        ) : (
          <p>
            24h Change
            <p className="green">{props.Percentage.toFixed(2)}%</p>
            {/* <img src={up_arrow} alt="increase arrow" /> */}
          </p>
        )}
      </div>

      {/* <Button></Button> */}
      <div id="buttons">
        <button>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/plus--v2.png"
            alt="plus"
            onClick={watchlist}
          />
        </button>
      </div>
    </div>
  );
};

export default App;

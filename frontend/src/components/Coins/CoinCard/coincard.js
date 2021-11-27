import "./coincard.css";
import up_arrow from "./img/up-arrow.png"
import down_arrow from "./img/down-arrow.png"

function watchlist(e) {
  e.target.setAttribute( 'src', 'https://img.icons8.com/ios-filled/20/000000/double-tick.png');
  e.target.setAttribute('alt', 'tick');
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
        {props.Percentage < 0 ? (
                <p className="red">
                  {props.Percentage.toFixed(2)}%
                  <img src={down_arrow} alt="increase arrow" />
                </p>
              ) : (
                <p className="green">
                  {props.Percentage.toFixed(2)}%
                  <img src={up_arrow} alt="increase arrow" />
                </p>
              )}
        
      </div>
      

      <div id="buttons">
        <button>
        <img src="https://img.icons8.com/material-outlined/24/000000/plus--v2.png" alt="plus" onClick={watchlist}/>
  
        </button>
      </div>
    </div>
  );
};

export default App;

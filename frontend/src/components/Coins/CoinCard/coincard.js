import logo from "./1.png";
import icon from "./img/icon.svg";
import "./coincard.css";

function App(props) {
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
          <img id="plus_icon" src={icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

import logo from "./1.png";
import icon from "./img/icon.svg";
import "./coincard.css";

function App(props) {
  return (
    <div id="card">
      <div className="top">
        <h1 id="heading">{props.name}</h1>
        <div className="image-crop">
          <img id="aqw" src={props.image} alt="" />
        </div>
      </div>
      <div className="middle">
        <h1>{props.currentPrice}</h1>
        <h1>{props.marketCap}</h1>
        <h1>Anything</h1>
      </div>

      <div id="buttons">
        <button>
          <img id="op" src={icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

import logo from './1.png'
import icon from './img/icon.svg'
import './coincard.css';

function App() {
  return (
    <div id="card">
      <div className="top">
        <h1 id="heading">Bitcoin</h1>
        <div className="image-crop">
          <img id="aqw" src={logo} alt="" />
        </div>
        </div>
        <div className="middle">
        <h1>Price</h1>
        <h1>Market cap</h1>
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

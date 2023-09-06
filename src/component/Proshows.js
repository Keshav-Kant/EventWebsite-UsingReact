import "../component/Proshows.css";
import cube from '../Images/cube33d 1 proshows.png';
const Proshows = () => {
  return (
    <div className="proshow">
        <div className="register-div-proshow">
      <div className="proshow-child">
      <div className="register-proshow">REGISTER!</div>
      </div>
      </div>
      <div className="pro-shows-main">PRO-SHOWS
      <div className="proshow-inner" ></div>
      </div>
      <img className="cube33d-1-icon-proshows" alt="" src={cube}/>
      <div className="middle-proshows">
      <div className="card">
      <div className="divflex">
          <b className="what-to-watch">What to watch</b>
          <div className="heading-4">Stream the Acme event</div>
        </div>
        <img
          className="card-example-4jpeg-icon"
          alt=""
          src="https://marketplace.canva.com/EAFZt1ZNXrE/1/0/1131w/canva-pink-and-blue-club-dj-party-night-flyer-k-UYZaADzs4.jpg"
        />
        
      </div>
      <div className="card2">
        <img
          className="card-example-4jpeg-icon"
          alt=""
          src="https://www.theboybandnight.com/media/band/band-9.jpg"
        />
        <div className="divflex">
          <b className="what-to-watch">Plant a tree</b>
          <div className="heading-4">Contribute to the planet</div>
        </div>
      </div>
      <div className="card">
        <img
          className="card-example-4jpeg-icon"
          alt=""
          src="https://assets.thehansindia.com/hansindia-bucket/3375_ktm4.jpg"
        />
        <div className="divflex">
          <b className="what-to-watch">Supercharged</b>
          <div className="heading-4">Creates beauty like a beast</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Proshows;

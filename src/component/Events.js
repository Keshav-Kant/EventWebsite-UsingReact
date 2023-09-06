import '../component/Events.css';
import cube from '../Images/dj-dj-svgrepo-com 1.svg';

const EVENTS = () => {
  return (
    <div className="events">
        <div className="register-div-event">
      <div className="events-child" >
      <div className="register-event">REGISTER!</div>
      <div className="events-item" />
      </div>
      </div>
      <div className="event-title">
      <img className="cube33d-1-icon-events" alt="" src={cube} />
      <div className="event-main">EVENTS
      <div className="event-inner" ></div>
      </div>
      </div>
      <div className="middle-proshows">
      <div className="card-event">
      <div className="divflex-event">
          
          <div className="heading-4-event">KALASHERTRA</div>
        </div>
        <img
          className="card-example-4jpeg-icon-event"
          alt=""
          src="https://marketplace.canva.com/EAFZt1ZNXrE/1/0/1131w/canva-pink-and-blue-club-dj-party-night-flyer-k-UYZaADzs4.jpg"
        />
        
      </div>
      <div className="card-event-2">
        <img
          className="card-example-4jpeg-icon-event"
          alt=""
          src="https://www.theboybandnight.com/media/band/band-9.jpg"
        />
        <div className="divflex-event">
          
          <div className="heading-4-event">SPOT EVENT</div>
        </div>
      </div>
      <div className="card-event">
        <img
          className="card-example-4jpeg-icon-event"
          alt=""
          src="https://assets.thehansindia.com/hansindia-bucket/3375_ktm4.jpg"
        />
        <div className="divflex-event">
          
          <div className="heading-4-event">TECHNOHOLIC</div>
        </div>
      </div>
      </div>
      <div className="events-child-bottom" >
      <div className="register-event-bottom">REGISTER!</div>
      </div>
    </div>
  );
};

export default EVENTS;

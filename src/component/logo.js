import React from "react";
import cube from '../Images/cube33d 1.png';
import earth from "../Images/earth.svg";
import '../component/logo.css';
const Logo = () => {
  return (
    <div className="logo">

      <div className="mohana-mantra">
        <a className="mohana">MOHANA</a>
        <a> MANTRA</a>
      </div>
      <img className="cube33d-1-icon" alt="" src={cube} />
      <div className="bottom-item">
      <div className="celebration-of-talentsalutati-container">
        <p className="celebration-of-talentsalutati">
          CELEBRATION OF TALENT, SALUTATION
        </p>
        <p className="celebration-of-talentsalutati">TO ART AND FUN.</p>
      </div>
     <div className="bottom-item-button">
      <div className="pro-shows rectangle-div">PRO-SHOWS</div>

      <div className="events1 rectangle-div">EVENTS</div>
      <div className="register rectangle-div">REGISTER!</div>
      </div>
      <div className="scroll-to-view">scroll to view more!</div>
      <div className="earth-container">
        <img src={earth} alt="Earth" className="earth-image" />
      </div>
      </div>
      

       
    </div>
  );
};

export default Logo;

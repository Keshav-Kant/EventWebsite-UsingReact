import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../Images/logo-200.jpg";

const Footer = () => {
  // Replace these with your college's latitude and longitude
  const collegeLatitude = 13.623488472385757;
  const collegeLongitude = 79.2894488098375;

  return (
    <div className="main-foot">
      <div className="footerMain">
        <div className="footerContainer container1">
          <div className="footerItem1">
            <img
              className="footerlogo"
              src={logo}
              width="200"
              height="100"
              alt="logo"
            />
          </div>
          <div className="footerItem1 description">
            <p>
              Mohana Mantra: Sree Vidyanikethan's National Techno-Cultural fest. Unveiling young talents through technical and cultural events. Blend of knowledge, entertainment, and frolic. Showcasing skills, creating memorable moments.
            </p>
          </div>
          <div className="contact-info">
            <MdPhone className="contact-icon" />
            <span className="contact-text">+91-9281089404</span>
          </div>
          <div className="contact-info">
            <MdEmail className="contact-icon" />
            <span className="contact-text">mohanamantra@mbu.asia</span>
          </div>
        </div>
        <div className="footerContainer container2">
          <div className="footerItem2">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/event">Events</Link>
              </li>
              {/*
              <li>
                <Link to="/spotlight">Spotlight</Link>
              </li>
              */}
              <li>
                <Link to="/theteam">The Team</Link>
              </li>
            {/*
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            */}
            </ul>
          </div>
          <div className="footerItem2">
            <ul>
              <li>
                <Link to="/timeline">Timeline</Link>
              </li>
              <li>
                <Link to="/registrationforms">Register</Link>
              </li>
              <li>
                <Link to="/sponsor">Sponsor</Link>
              </li>
              {/*
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/logistics">Schedule</Link>
              </li>
              */}
            </ul>
          </div>
        </div>
        <div className="footerContainer container3">
          <h1>Follow Us on</h1>
          <ul className="footerSocial">
            <li>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/mohana_mantra?igshid=ZDc4ODBmNjlmNQ==">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MohanaMantraSVEI?mibextid=ZbWKwL">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Mohana_Mantra/status/1681512441036046336?t=dGOt2LIZMh1h5srHUCaiyw&s=08">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/your_youtube_channel">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps?q=${collegeLatitude},${collegeLongitude}`}
                target="_blank"
                rel="noreferrer"
              >
                <MdLocationOn className="google-maps-icon" />
              </a>
            </li>
          </ul>

        </div>

      </div>

      {/* Google Maps */}
      <div>
        <p className="footerEnd">
          Crafted with love by the <button href="#">WEB Wing</button> | ©2023 MBU
        </p>
      </div>
    </div>
  );
};

export default Footer;

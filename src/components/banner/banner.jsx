import React from 'react';
import "./banner.scss";
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import listen from "../../assets/listen.png"
const Banner = ({ title, description, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-content">
        <img src={logo} alt="uduX" className="banner-logo" />
        <h2 className="banner-title">
          The <span className="highlight">No.01</span> Music platform
          <span className="highlight"> empowering African artists</span>
        </h2>
        <p className="banner-description">
          uduX Music is an artist-first music platform that helps musicians
          <span className="highlight"> reach</span> and
          <span className="highlight"> engage fans across the world.</span>
        </p>
      </div>

      <img className='listen' src={listen} alt='icon' />
    </div>
  );
};

export default Banner;

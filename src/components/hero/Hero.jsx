import React from 'react';
import './hero.scss';
import Tabs from '../tabs/Tabs';
import Banner from '../banner/banner';
import bg from "../../assets/banner1.png"

const Hero = () => {
  return (
    <div className="hero">
      <h2 className="hero-welcome">Welcome back, Lamide</h2>
      <Tabs />
      <Banner
        title="The No.01 Music platform empowering African artists"
        description="uduX Music is an artist-first music platform that helps musicians reach and engage fans across the world."
        image={bg}
      />
    </div>
  );
};

export default Hero;

import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_bg from "../../assets/hero_image_back.png"

const Hero = () => {
  return (
    <div className="hero" id="home">
      {/* Left Side of the hero Section */}
      <div className="left">
        <Header />

        {/* Advertisement bar */}
        <div className="advertisement">
          <div></div>
          <span>The best fitness club in your city</span>
        </div>

        {/* Heading of the hero page */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body </span>
          </div>
          <div>
            <span>
              Unlock Your Potential with Fitness Mantra: Where Health and
              Strength Converge!
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>
      <div className="right">
        <button className="btn">Join Now</button>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image"/>
        <img src={hero_image_bg} alt="" className="hero-image-bg"/>
      </div>
    </div>
  );
};

export default Hero;

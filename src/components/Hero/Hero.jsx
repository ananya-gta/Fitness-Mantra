import React from "react";
import "./hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Side of the hero Section */}
      <div className="left">

        <Header />

        {/* Advertisement bar */}
        <div className="advertisement">
          <div></div>
          <span>The best fitness club in your city</span>
        </div>

        {/* Heading on the hero page */}
        <div className="hero-text">
          <span>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body </span>
        </div>

      </div>
      <div className="right">right side</div>
    </div>
  );
};

export default Hero;



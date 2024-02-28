import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_bg from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";

const Hero = () => {
  const transition = { type: "tween", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/* Left Side of the hero Section */}
      <div className="left">
        <Header />

        {/* Advertisement bar */}
        <div className="advertisement">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>

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
          <button
            className="btn"
            onClick={() => (window.location.href = "#plans")}
          >
            Get Started
          </button>
          <button
            className="btn"
            onClick={() => (window.location.href = "#programs")}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="right">
        <button
          className="btn"
          onClick={() => (window.location.href = "#join-us")}
        >
          Join Our Community
        </button>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "24rem" }}
          transition={transition}
          src={hero_image_bg}
          alt=""
          className="hero-image-bg"
        />
      </div>
    </div>
  );
};

export default Hero;

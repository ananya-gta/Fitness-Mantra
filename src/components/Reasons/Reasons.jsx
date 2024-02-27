import React from "react";
import "../Reasons/reasons.css";
import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/image2.png";
import IMG3 from "../../assets/image3.png";
import IMG4 from "../../assets/image4.png";
import NIKE from "../../assets/nike.png";
import ADIDAS from "../../assets/adidas.png";
import NB from "../../assets/nb.png";
import BULLETS from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons-left">
        <img src={IMG1} alt="" />
        <img src={IMG2} alt="" />
        <img src={IMG3} alt="" />
        <img src={IMG4} alt="" />
      </div>
      <div className="reasons-right">
        <span>Five Reasons</span>
        <div>
          <span className="stroke-text">WHY </span>
          <span>Choose us?</span>
        </div>
        <div className="reasons-desc">
          <div>
            <img src={BULLETS} alt=""></img>
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            <img src={BULLETS} alt="" />
            <span>goal-based workout & meditation sessions</span>
          </div>
          <div>
            <img src={BULLETS} alt="" />
            <span>customized workout plans</span>
          </div>
          <div>
            <img src={BULLETS} alt="" />
            <span>2 Sessions/month at ELITE gyms & group classes</span>
          </div>
          <div>
            <img src={BULLETS} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
            <img src={NB} alt="" /><img src={ADIDAS} alt="" /><img src={NIKE} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;

import React from "react";
import "../Plans/plans.css";
import { plansData } from "./../../data/plansData";
import BULLETS from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "1rem" }}>
        <span className="stroke-text">Choose your </span>
        <span>fitness plans</span>
        <span className="stroke-text">with us</span>
      </div>

      <div className="plans-cards">
        {plansData.map((plan, id) => (
          <div className="plan" key={id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div>
              <span>Unlimited access to</span>
            </div>

            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature">
                  <img src={BULLETS} alt="" />
                  <span key={id}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits {`→`}</span>
            </div>
            <button className="btn">
                Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

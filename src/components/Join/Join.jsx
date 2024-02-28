import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvdmy4m",
        "template_eucq794",
        form.current,
        "NDZD5oxWjL8_FGexJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">JOIN the </span>
          <span>Fitness Mantra</span>
        </div>
        <div>
          <span>Community </span>
          <span className="stroke-text">Today</span>
        </div>
      </div>
      <div className="right-join">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email Address"
            required
          />
          <button type="submit" className="btn btn-join">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;

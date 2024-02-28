import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ananya-gupta-1902/"
          target="_blank" rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/ananya-gta" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/ananya_192" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://discord.com/users/864127704231968789" target="_blank" rel="noreferrer">
          <FaDiscord />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2024 Ananya Gupta</small>
      </div>
    </div>
  );
};

export default Footer;

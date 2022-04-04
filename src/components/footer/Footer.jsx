import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Rafael Berger
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/rafael-berger" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/RafaelBerger" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rafael de Andrade Berger. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

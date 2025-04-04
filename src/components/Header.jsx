import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <header className="header">
    <h1>Anand Maurya</h1>
    <p>Bioinformatician</p>
    <p>Oxford, United Kingdom</p>
    <div className="icon-links">
      <a
        href="mailto:anandmaurya@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope title="anandmaurya@hotmail.com" />
      </a>
      <a
        href="https://www.linkedin.com/in/anand-maurya-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin title="anand-maurya-" />
      </a>
      <a
        href="https://github.com/maurya-anand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub title="maurya-anand" />
      </a>
      <a
        href="https://github.com/anand-imcm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub title="anand-imcm" />
      </a>
      <a
        href="https://orcid.org/0000-0002-6204-2164"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaOrcid title="Orcid" />
      </a>
    </div>
  </header>
);

export default Header;

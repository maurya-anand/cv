import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header className='header'>
    <h1>Anand Maurya</h1>
    <p>Bioinformatician</p>
    <p>Oxford, United Kingdom</p>
    <div className="icon-links">
      <a href="mailto:anandmaurya@hotmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/anand-maurya-" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/maurya-anand" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://github.com/anand-imcm" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  </header>
);

export default Header;
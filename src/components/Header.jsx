import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaOrcid,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <header className="header card">
    <div className="header-main">
      <div className="header-meta">
        <h1 className="header-name">Anand Maurya</h1>
      </div>
      <span className="header-title">Bioinformatics Scientist</span>
      <p className="header-summary">
        Bioinformatics scientist with nearly a decade of experience building
        scalable NGS pipelines and full-stack web applications for clinical
        genomics and multi-omics research.
      </p>
      <p className="header-summary">
        Specialized in analyzing both short-read (Illumina) and long-read
        (PacBio HiFi, Oxford Nanopore) sequencing data, including whole-genome,
        whole-exome, and RNA-seq, for research and diagnostic applications.
      </p>
    </div>
    <div className="header-contact">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:anandmaurya@hotmail.com">anandmaurya@hotmail.com</a>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/anand-maurya-"
          target="_blank"
          rel="noopener noreferrer"
        >
          anand-maurya-
        </a>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <div className="github-links">
          <a
            href="https://github.com/maurya-anand"
            target="_blank"
            rel="noopener noreferrer"
          >
            maurya-anand
          </a>
          <span>/</span>
          <a
            href="https://github.com/anand-imcm"
            target="_blank"
            rel="noopener noreferrer"
          >
            anand-imcm
          </a>
        </div>
      </div>
      <div className="contact-item">
        <FaOrcid className="contact-icon" />
        <a
          href="https://orcid.org/0000-0002-6204-2164"
          target="_blank"
          rel="noopener noreferrer"
        >
          orcid.org/0000-0002-6204-2164
        </a>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <span>Oldenburg, Germany</span>
      </div>
    </div>
  </header>
);

export default Header;

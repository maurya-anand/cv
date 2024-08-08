import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaDocker,
  FaReact,
  FaBootstrap,
  FaToolbox,
} from "react-icons/fa";
import {
  SiPypi,
  SiDjango,
  SiPerl,
  SiGnubash,
  SiJavascript,
  SiMui,
  SiAnaconda,
  SiGithubactions,
  SiFirebase,
  SiRender,
  SiAxios,
  SiGooglecloud,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import "./Projects.css";

const projects = [
  {
    name: "ARA (Automated Record Analysis)",
    description:
      "An automatic pipeline for exploration of SRA datasets with sequences as a query.",
    repo: "https://github.com/maurya-anand/ARA",
    technologies: [
      "Perl",
      "FaToolbox",
      "Docker",
      "SiAnaconda",
      "SiGithubactions",
    ],
  },
  {
    name: "Covid19 tracker",
    description:
      "A dashboard application to display the Covid-19 cases across the world.",
    demo: "https://covidlive-8jvw.onrender.com/",
    repo: "https://github.com/maurya-anand/covid19live",
    technologies: ["Python", "Django", "JavaScript", "FaBootstrap", "SiRender"],
  },
  {
    name: "Multi-language dictionary",
    description: "A dictionary app using the 'dictionary API'.",
    demo: "https://dictionary-aa43b.web.app/",
    repo: "https://github.com/maurya-anand/react-dictionary",
    technologies: ["ReactJS", "MUI", "SiAxios", "SiFirebase"],
  },
  {
    name: "Netflix UI clone",
    description: "Netflix-clone using themoviedb API.",
    demo: "https://netflix-react-a5dbe.web.app/",
    repo: "https://github.com/maurya-anand/netflix-react",
    technologies: ["ReactJS", "SiAxios", "SiFirebase"],
  },
  {
    name: "SRA-annotator",
    description:
      "A command-line tool for retrieving annotations from the NCBI SRA database.",
    repo: "https://github.com/maurya-anand/sra-annotator",
    technologies: ["Python", "NCBIApi"],
  },
  {
    name: "getBamDepth",
    description:
      "A custom tool for reporting depth of coverage from BAM/SAM/CRAM file or parse the output generated from `samtools depth`.",
    repo: "https://github.com/maurya-anand/getBamDepth",
    technologies: ["Perl"],
  },
  {
    name: "variant-liftover",
    description:
      "A command-line tool to liftover SNVs/Indels from hg19 to hg38.",
    repo: "https://github.com/maurya-anand/liftover",
    technologies: ["Bash", "Docker", "SiGithubactions"],
  },
  {
    name: "pb-variant-call",
    description:
      "A WDL-based workflow for variant calling and annotation using PacBio Hi-Fi reads, optimized for execution on the Terra.bio cloud platform.",
    demo: "https://dockstore.org/workflows/github.com/anand-imcm/pb-variant-call",
    repo: "https://github.com/anand-imcm/pb-variant-call",
    technologies: [
      "PiBracketsCurlyBold",
      "Python",
      "Perl",
      "Docker",
      "SiGithubactions",
      "SiGooglecloud",
    ],
  },
];

const technologyIcons = {
  Python: <FaPython className="technology-icon" title="Python" />,
  Docker: <FaDocker className="technology-icon" title="Docker" />,
  ReactJS: <FaReact className="technology-icon" title="ReactJS" />,
  Django: <SiDjango className="technology-icon" title="Django" />,
  Perl: <SiPerl className="technology-icon" title="Perl" />,
  Bash: <SiGnubash className="technology-icon" title="Bash" />,
  JavaScript: <SiJavascript className="technology-icon" title="JavaScript" />,
  MUI: <SiMui className="technology-icon" title="Material UI" />,
  SiAnaconda: <SiAnaconda className="technology-icon" title="Mamba" />,
  SiGithubactions: (
    <SiGithubactions className="technology-icon" title="Github Actions" />
  ),
  FaBootstrap: <FaBootstrap className="technology-icon" title="Bootstrap" />,
  SiFirebase: <SiFirebase className="technology-icon" title="Firebase" />,
  SiRender: <SiRender className="technology-icon" title="Render" />,
  SiAxios: <SiAxios className="technology-icon" title="Axios" />,
  NCBIApi: <TbApi className="technology-icon" title="NCBI Entrez" />,
  TbApi: <TbApi className="technology-icon" title="NCBI Entrez" />,
  FaToolbox: <FaToolbox className="technology-icon" title="NCBI SRA toolkit" />,
  PiBracketsCurlyBold: (
    <PiBracketsCurlyBold
      className="technology-icon"
      title="Workflow Description Language (WDL)"
    />
  ),
  SiGooglecloud: (
    <SiGooglecloud className="technology-icon" title="Terra.bio on GCP" />
  ),
};

const Projects = () => (
  <section className="section-container">
    <h2 className="centered-header">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-header">
            <h3 className="project-title">{project.name}</h3>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="technology-icon">
                  {technologyIcons[tech]}
                </span>
              ))}
            </div>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            )}
            {project.pypi && (
              <a
                href={project.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <SiPypi /> PyPI
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> Source
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

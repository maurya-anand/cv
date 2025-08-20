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
  SiGnu,
  SiJavascript,
  SiMui,
  SiAnaconda,
  SiGithubactions,
  SiFirebase,
  SiRender,
  SiAxios,
  SiGooglecloud,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import "./Projects.css";

const projects = [
  {
    name: "Gauchian-enrich",
    description:
      "A variant annotator for GBA variants called by Illumina Gauchian tool.",
    repo: "https://github.com/maurya-anand/gauchian-enrich",
    technologies: ["Perl", "Make", "Docker", "SiGithubactions"],
  },
  {
    name: "proteomics-ML-workflow",
    description:
      "A cloud-based proteomics machine learning workflow for biomarker discovery.",
    demo: "https://dockstore.org/workflows/github.com/anand-imcm/proteomics-ML-workflow",
    repo: "https://github.com/anand-imcm/proteomics-ML-workflow",
    technologies: [
      "PiBracketsCurlyBold",
      "Python",
      "SiTensorflow",
      "SiScikitlearn",
      "Docker",
      "SiGithubactions",
      "SiGooglecloud",
    ],
  },
  {
    name: "getBamDepth",
    description:
      "A tool to generate 'depth of coverage' from BAM/SAM/CRAM file or parse the output generated from samtools.",
    repo: "https://github.com/maurya-anand/getBamDepth",
    technologies: ["Perl", "SiGithubactions"],
  },
  {
    name: "variant-liftover",
    description:
      "A command-line tool to liftover SNVs/Indels from hg19 to hg38.",
    repo: "https://github.com/maurya-anand/liftover",
    technologies: ["Make", "Python", "Docker", "SiGithubactions"],
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
  {
    name: "ARA (Automatic Record Analysis)",
    description:
      "A pipeline designed for the automatic exploration of NCBI SRA datasets using nucleotide sequences as queries. ",
    repo: "https://github.com/maurya-anand/ARA",
    demo: "https://workflowhub.eu/workflows/546",
    technologies: [
      "Perl",
      "FaToolbox",
      "Docker",
      "SiAnaconda",
      "SiGithubactions",
    ],
  },
  {
    name: "SRA-annotator",
    description:
      "A command-line tool for retrieving annotations from the NCBI SRA database.",
    repo: "https://github.com/maurya-anand/sra-annotator",
    technologies: ["Python", "NCBIApi"],
  },
  {
    name: "Covid19 tracker",
    description:
      "An interactive dashboard built using Django that uses the Disease.sh API to visualize the global Covid-19 case data in real-time.",
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
];

const technologyIcons = {
  Python: <FaPython className="technology-icon" title="Python" />,
  Docker: <FaDocker className="technology-icon" title="Docker" />,
  ReactJS: <FaReact className="technology-icon" title="ReactJS" />,
  Django: <SiDjango className="technology-icon" title="Django" />,
  Perl: <SiPerl className="technology-icon" title="Perl" />,
  Bash: <SiGnubash className="technology-icon" title="Bash" />,
  Make: <SiGnu className="technology-icon" title="GNU Make" />,
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
  SiTensorflow: <SiTensorflow className="technology-icon" title="Tensorflow" />,
  SiScikitlearn: <SiScikitlearn className="technology-icon" title="Scikitlearn" />,
};

const Projects = () => (
  <section className="section-container">
    <h2 className="centered-header">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-technologies">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="technology-icon-wrapper">
                {technologyIcons[tech]}
              </span>
            ))}
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

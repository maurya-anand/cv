import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCode,
  FaPython,
  FaDocker,
  FaReact,
  FaCogs,
} from "react-icons/fa";
import {
  SiGnu,
  SiGnubash,
  SiJavascript,
  SiPerl,
  SiR,
  SiMysql,
  SiDjango,
  SiBootstrap,
  SiD3Dotjs,
  SiJquery,
  SiPlotly,
  SiChartdotjs,
  SiConfluence,
  SiGithub,
  SiMarkdown,
  SiRedmine,
  SiAnaconda,
  SiPypi,
  SiGithubactions,
  SiJenkins,
  SiGit,
  SiSubversion,
  SiGooglecloud,
} from "react-icons/si";
import { PiBracketsCurlyBold, PiNotebook } from "react-icons/pi";
import { GiDna1 } from "react-icons/gi";
import { BiLineChart } from "react-icons/bi";
import { TbTopologyComplex, TbServerBolt, TbTopologyStar } from "react-icons/tb";
import "./Skills.css";

const skillsData = [
  {
    category: "Bioinformatics",
    skills: [
      "Germline and somatic variant calling",
      "NGS data analysis (WGS, WES, RNA-Seq)",
      "Pipeline development and automation",
    ],
    icon: <FaTools />,
  },
  {
    category: "Workflow Management",
    skills: ["Make", "Nextflow", "WDL"],
    icon: <FaTools />,
  },
  {
    category: "Web Development",
    skills: [
      "Bootstrap",
      "D3.js",
      "Django",
      "Django Rest Framework",
      "HighCharts",
      "jQuery",
      "Perl CGI",
      "Plotly",
      "React",
    ],
    icon: <FaCode />,
  },
  {
    category: "Programming Languages",
    skills: ["Bash", "JavaScript", "Perl", "Python", "R", "SQL"],
    icon: <FaCode />,
  },
  {
    category: "Project Management & Documentation",
    skills: ["Confluence", "GitHub Projects", "Markdown", "Quarto", "Redmine"],
    icon: <FaProjectDiagram />,
  },
  {
    category: "Containerization & Package Management",
    skills: ["Docker", "Mamba", "Pip"],
    icon: <FaDatabase />,
  },
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "Jenkins"],
    icon: <FaProjectDiagram />,
  },
  {
    category: "Cluster Computing (HPC)",
    skills: ["PBS", "SLURM"],
    icon: <FaServer />,
  },
  {
    category: "Version Control",
    skills: ["Git", "SVN"],
    icon: <FaCode />,
  },
  {
    category: "Cloud Computing",
    skills: ["Google Cloud Platform (GCP)"],
    icon: <FaCloud />,
  },
];

const skillIcons = {
  "Germline and somatic variant calling": <GiDna1 />,
  "NGS data analysis (WGS, WES, RNA-Seq)": <BiLineChart />,
  "Pipeline development and automation": <FaCogs />,
  Make: <SiGnu />,
  Nextflow: <TbTopologyComplex />,
  WDL: <PiBracketsCurlyBold />,
  Bootstrap: <SiBootstrap />,
  "D3.js": <SiD3Dotjs />,
  Django: <SiDjango />,
  "Django Rest Framework": <SiDjango />,
  HighCharts: <SiChartdotjs />,
  jQuery: <SiJquery />,
  "Perl CGI": <SiPerl />,
  Plotly: <SiPlotly />,
  React: <FaReact />,
  Bash: <SiGnubash />,
  JavaScript: <SiJavascript />,
  Perl: <SiPerl />,
  Python: <FaPython />,
  R: <SiR />,
  SQL: <SiMysql />,
  Confluence: <SiConfluence />,
  "GitHub Projects": <SiGithub />,
  Markdown: <SiMarkdown />,
  Quarto: <PiNotebook />,
  Redmine: <SiRedmine />,
  Docker: <FaDocker />,
  Mamba: <SiAnaconda />,
  Pip: <SiPypi />,
  "GitHub Actions": <SiGithubactions />,
  Jenkins: <SiJenkins />,
  PBS: <TbServerBolt />,
  SLURM: <TbTopologyStar />,
  Git: <SiGit />,
  SVN: <SiSubversion />,
  "Google Cloud Platform (GCP)": <SiGooglecloud />,
};

const Skills = () => (
  <section className="section-container">
    <h2 className="centered-header">Skills</h2>
    <div className="skills-list">
      {skillsData.map((category, index) => (
  <div key={index} className="skill-category card">
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.category}</h3>
          </div>
          <div className="skills-tags">
            {category.skills.map((skill, idx) => {
              const icon = skillIcons[skill];
              return (
                <span
                  key={idx}
                  className={`skill-tag${icon ? " skill-tag--with-icon" : ""}`}
                >
                  {icon && <span className="skill-icon">{icon}</span>}
                  <span>{skill}</span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

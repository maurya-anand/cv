import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
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

const Skills = () => (
  <section className="section-container">
    <h2 className="centered-header">Skills</h2>
    <div className="skills-list">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.category}</h3>
          </div>
          <div className="skills-tags">
            {category.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

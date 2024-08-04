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
      { name: "Germline and somatic variant calling", level: 90 },
      { name: "NGS data analysis (WGS, WES, RNA-Seq)", level: 85 },
      { name: "Pipeline development and automation", level: 80 },
    ],
    icon: <FaTools />,
  },
  {
    category: "CI/CD",
    skills: [
      { name: "GitHub Actions", level: 85 },
      { name: "Jenkins", level: 75 },
    ],
    icon: <FaProjectDiagram />,
  },
  {
    category: "Cluster Computing (HPC)",
    skills: [
      { name: "PBS", level: 70 },
      { name: "SLURM", level: 75 },
    ],
    icon: <FaServer />,
  },
  {
    category: "Cloud Computing",
    skills: [{ name: "Google Cloud Platform (GCP)", level: 85 }],
    icon: <FaCloud />,
  },
  {
    category: "Containerization & Package Management",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Mamba", level: 75 },
      { name: "Pip", level: 80 },
    ],
    icon: <FaDatabase />,
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Bash", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Perl", level: 70 },
      { name: "Python", level: 90 },
      { name: "R", level: 85 },
      { name: "SQL", level: 80 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Project Management & Documentation",
    skills: [
      { name: "Confluence", level: 75 },
      { name: "GitHub Projects", level: 70 },
      { name: "Markdown", level: 80 },
      { name: "Quarto", level: 75 },
      { name: "Redmine", level: 70 },
    ],
    icon: <FaProjectDiagram />,
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 85 },
      { name: "SVN", level: 70 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Web Development",
    skills: [
      { name: "Bootstrap", level: 75 },
      { name: "D3.js", level: 70 },
      { name: "Django", level: 80 },
      { name: "Django Rest Framework", level: 75 },
      { name: "HighCharts", level: 70 },
      { name: "jQuery", level: 75 },
      { name: "Perl CGI", level: 65 },
      { name: "Plotly", level: 70 },
      { name: "React", level: 80 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Workflow Management",
    skills: [
      { name: "Make", level: 75 },
      { name: "Nextflow", level: 80 },
      { name: "WDL", level: 70 },
    ],
    icon: <FaTools />,
  },
];

const Skills = () => (
  <section className="section-container">
    <h2 className="centered-header">Skills</h2>
    <div className="skills-grid">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-card">
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.category}</h3>
          </div>
          {category.skills.map((skill, idx) => (
            <div key={idx} className="skill-bar">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level" style={{ width: `${skill.level}%` }}>
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

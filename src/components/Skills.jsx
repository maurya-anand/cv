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
      { name: "Pipeline development and automation", level: 95 },
    ],
    icon: <FaTools />,
  },
  {
    category: "Workflow Management",
    skills: [
      { name: "Make", level: 80 },
      { name: "Nextflow", level: 90 },
      { name: "WDL", level: 90 },
    ],
    icon: <FaTools />,
  },
  {
    category: "Web Development",
    skills: [
      { name: "Bootstrap", level: 75 },
      { name: "D3.js", level: 60 },
      { name: "Django", level: 85 },
      { name: "Django Rest Framework", level: 70 },
      { name: "HighCharts", level: 70 },
      { name: "jQuery", level: 65 },
      { name: "Perl CGI", level: 80 },
      { name: "Plotly", level: 60 },
      { name: "React", level: 85 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Bash", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Perl", level: 95 },
      { name: "Python", level: 80 },
      { name: "R", level: 70 },
      { name: "SQL", level: 80 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Project Management & Documentation",
    skills: [
      { name: "Confluence", level: 85 },
      { name: "GitHub Projects", level: 80 },
      { name: "Markdown", level: 95 },
      { name: "Quarto", level: 70 },
      { name: "Redmine", level: 80 },
    ],
    icon: <FaProjectDiagram />,
  },
  {
    category: "Containerization & Package Management",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Mamba", level: 80 },
      { name: "Pip", level: 80 },
    ],
    icon: <FaDatabase />,
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
      { name: "SLURM", level: 90 },
    ],
    icon: <FaServer />,
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
    category: "Cloud Computing",
    skills: [{ name: "Google Cloud Platform (GCP)", level: 85 }],
    icon: <FaCloud />,
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
          {category.skills
            .sort((a, b) => b.level - a.level)
            .map((skill, idx) => (
              <div key={idx} className="skill-bar">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level" style={{ width: `${skill.level}%` }}>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

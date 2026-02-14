import React from "react";
import "./Timeline.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    type: "work",
    company: "Carl von Ossietzky University of Oldenburg",
    location: "Oldenburg, Germany",
    title: "Research Associate",
    period: "Aug 2025 - Current",
    duties: [
      "Lead bioinformatics operations at CFGB (Core Facility Genomics and Bioinformatics), overseeing genomic data management and analysis workflows.",
      "Provide bioinformatics support for clinical research projects at the University Institute for Medical Genetics.",
    ],
  },
  {
    type: "work",
    company: "University of Oxford",
    location: "Oxford, United Kingdom",
    title: "Bioinformatician",
    period: "Jan 2023 - Aug 2025",
    duties: [
      "Designed and implemented workflows for the research group's Terra.bio platform, a cloud-based trusted research environment (TRE) on Google Cloud, including a WDL-based workflow for variant calling and annotation using PacBio long-read sequencing data, and a machine learning workflow for proteomic data.",
      "Led the processing and analysis of diverse 'omics datasets for research projects at the Oxford-GSK Institute for Molecular and Computational Medicine (IMCM).",
      "Provided bioinformatics support to IMCM research teams, devising new analysis strategies and working closely with the bioinformatics core group.",
      "Maintained extensive documentation of all analyses and code within the IMCM data platform.",
    ],
  },
  {
    type: "education",
    company: "Adam Mickiewicz University",
    location: "Poznan, Poland",
    title: "Research Scholar",
    period: "Oct 2018 - Dec 2022",
    duties: [
      "Developed a bioinformatics pipeline for automated exploration of NCBI SRA datasets, enabling efficient sequence-based searches and analysis of large-scale NGS data.",
      "Analyzed publicly available RNA-seq data to understand gene expression patterns of snoRNAs, tRNAs, and tRNA-like genes.",
      "Performed comparative genomic analyses of draft and complete genomes to identify and characterize novel tRNA-Cys gene clusters in Arabidopsis thaliana.",
      "Developed a snoRNA expression atlas web application, including gene annotations, expression levels, and predicted target genes.",
      "Developed a tRNA expression database providing insights into tRNA and tRNA-like gene expression, transcript-level coverage, and structural details.",
    ],
  },
  {
    type: "work",
    company: "Medgenome Labs Ltd.",
    location: "Banglore, India",
    title: "Bioinformatics Analyst",
    period: "Apr 2016 - Sept 2018",
    duties: [
      "Developed an in-house variant annotation database to support the interpretation and reporting of clinically relevant genomic variants.",
      "Automated the in-house neo-epitope prioritization pipeline for somatic variants to enhance scalability and expedite project delivery.",
      "Created a web application for automatic prioritization and reporting of neo-epitopes.",
      "Developed a web-based QC dashboard for NGS data analysis on in-house servers.",
      "Delivered WES, WGS, RNA seq, and neo-epitope prediction projects to clinicians and clients for diagnostic purposes.",
    ],
  },
  {
    type: "work",
    company: "Genotypic Technology Pvt. Ltd.",
    location: "Banglore, India",
    title: "Bioinformatics Trainee",
    period: "Oct 2015 - Apr 2016",
    duties: [
      "Enhanced the in-house variant annotation pipeline by adding newer annotation sources.",
      "Analyzed clinical whole-exome sequencing (WES) data to aid clinicians in diagnosing genetic diseases.",
      "Conducted benchmarking of variant calling tools, including Illumina's BaseSpace and Agilent SureCall.",
    ],
  },
  {
    type: "education",
    company: "Sam Higginbottom Institute of Agriculture, Technology & Sciences",
    location: "Prayagraj, India",
    title: "Master of Technology (M.Tech) in Bioinformatics",
    period: "2013 - 2015",
    duties: [],
  },
  {
    type: "education",
    company: "Bharath University",
    location: "Chennai, India",
    title: "Bachelor of Technology (B.Tech) in Bioinformatics",
    period: "2008 - 2012",
    duties: [],
  },
];

const getPeriodDetails = (period) => {
  const years = (period.match(/\d{4}/g) || []).map(Number);
  const hasCurrent = /current/i.test(period);

  const startYear = years[0] || 0;
  const endYear = hasCurrent
    ? new Date().getFullYear() + 1
    : years[years.length - 1] || startYear;

  return { startYear, endYear };
};

const sortedTimeline = [...timelineData].sort((a, b) => {
  const aDetails = getPeriodDetails(a.period);
  const bDetails = getPeriodDetails(b.period);

  if (bDetails.endYear !== aDetails.endYear) {
    return bDetails.endYear - aDetails.endYear;
  }

  return bDetails.startYear - aDetails.startYear;
});

const Timeline = () => {
  return (
    <section className="section-container">
      <h2 className="centered-header">Career Timeline</h2>
      <div className="timeline-container">
        {sortedTimeline.map((item, index) => {
          const isWork = item.type === "work";
          return (
            <article key={index} className="timeline-entry">
              <div className="timeline-node">
                <span className="timeline-marker">
                  {isWork ? <FaBriefcase /> : <FaGraduationCap />}
                </span>
                {index !== sortedTimeline.length - 1 && (
                  <span className="timeline-connector" />
                )}
              </div>
              <div className="timeline-card card">
                <div className="timeline-card-header">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">
                    {item.company} · {item.location}
                  </p>
                </div>
                {item.duties.length > 0 && (
                  <ul className="duty-list">
                    {item.duties.map((duty, idx) => (
                      <li key={idx}>{duty}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;

import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { FaBriefcase, FaGraduationCap, FaChevronDown, FaChevronUp } from "react-icons/fa";

const timelineData = [
  {
    type: "work",
    company: "University of Oxford",
    location: "Oxford, United Kingdom",
    title: "Bioinformatician",
    period: "Jan 2023 - Current",
    duties: [
      "Design and implement workflows for the research group’s Terra.bio platform, a cloud-based trusted research environment (TRE) on Google Cloud.",
      "Lead the processing and analysis of diverse 'omics datasets for research projects at the Oxford-GSK Institute for Molecular and Computational Medicine (IMCM).",
      "Provide bioinformatics support to IMCM research teams, devising new analysis strategies and working closely with the bioinformatics core group.",
      "Maintain extensive documentation of all analyses and code within the IMCM data platform.",
    ],
  },
  {
    type: "education",
    company: "Adam Mickiewicz University",
    location: "Poznan, Poland",
    title: "PhD Researcher",
    period: "Oct 2018 - Current",
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
      "Developed an in-house variant annotation database.",
      "Automated the in-house neo-epitope prioritization pipeline for somatic variants.",
      "Created a web application for automatic prioritization and reporting of neo-epitopes.",
      "Developed a web-based QC dashboard for NGS data analysis on in-house servers.",
      "Delivered WES, WGS, RNA seq, and neo-epitope prediction projects for clients.",
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
      "Analyzed clinical whole-exome sequencing (WES) data.",
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

const combinedTimeline = timelineData.sort((a, b) => {
  const getDate = (period) => new Date(period.split(" - ")[1] || new Date());
  return getDate(b.period) - getDate(a.period);
});

// const Timeline = () => {
//   const [expanded, setExpanded] = useState(
//     Array(timelineData.length).fill(false)
//   );

//   const toggleExpand = (index) => {
//     setExpanded((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   return (
//     <section className="section-container">
//       <h2 className="centered-header">Career Timeline</h2>
//       <VerticalTimeline>
//         {combinedTimeline.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             date={item.period}
//             icon={item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
//             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           >
//             <div className="timeline-card">
//               <h3 className="vertical-timeline-element-title">{item.title}</h3>
//               <h4 className="vertical-timeline-element-subtitle">
//                 {item.company} - {item.location}
//               </h4>
//               {item.duties.length > 0 && (
//                 <>
//                   <button
//                     onClick={() => toggleExpand(index)}
//                     className="expand-button full-width-button"
//                     title="Click to view more details"
//                   >
//                     {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
//                   </button>
//                   {expanded[index] && (
//                     <ul>
//                       {item.duties.map((duty, idx) => (
//                         <li key={idx}>{duty}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               )}
//             </div>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// };

const Timeline = () => {
  return (
    <section className="section-container">
      <h2 className="centered-header">Career Timeline</h2>
      <VerticalTimeline>
        {combinedTimeline.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.period}
            icon={item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <div className="timeline-card">
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle subtitle-font">
                {item.company} - {item.location}
              </h4>
              {item.duties.length > 0 && (
                <ul className="duty-list">
                  {item.duties.map((duty, idx) => (
                    <li key={idx}>{duty}</li>
                  ))}
                </ul>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;

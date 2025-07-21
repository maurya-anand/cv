import React from "react";
import "./Publications.css";

const publications = [
  {
    title:
      "GeneFEAST: The pivotal, gene-centric step in functional enrichment analysis interpretation",
    authors:
      "Taylor, A., Macaulay, V. M., Miossec, M. J., Maurya, A. K., & Buffa, F. M.",
    journal: "Bioinformatics",
    year: 2025,
    doi: "https://doi.org/10.1093/bioinformatics/btaf100",
  },
  {
    title:
      "A cloud-based proteomics ML workflow for biomarker discovery",
    authors:
      "Zhou, Y., Maurya, A., Deng, Y., & Taylor, A",
    journal: "preprint zenodo.13378797",
    year: 2024,
    doi: "https://doi.org/10.5281/zenodo.13378797",
  },
  {
    title:
      "ARA: A flexible pipeline for automated exploration of NCBI SRA datasets",
    authors: "Maurya, A., Szymanski, M., & Karlowski, W. M.",
    journal: "GigaScience",
    year: 2023,
    doi: "https://doi.org/10.1093/gigascience/giad067",
  },
  {
    title:
      "tRNA-Cys gene clusters exhibit high variability in Arabidopsis thaliana",
    authors: "Szymanski, M., Maurya, A., Kopec, P., & Karlowski, W. M.",
    journal: "BMC Plant Biology",
    year: 2023,
    doi: "https://doi.org/10.1186/s12870-023-04632-x",
  },
  {
    title:
      "A neoepitope derived from a novel human germline APC gene mutation in familial adenomatous polyposis shows selective immunogenicity",
    authors:
      "Majumder, S., Shah, R., Elias, J., Mistry, Y., Coral, K., Shah, P., ... Murugan, S.",
    journal: "PloS one",
    year: 2018,
    doi: "https://doi.org/10.1371/journal.pone.0203845",
  },
  {
    title:
      "Integrated analysis of whole exome and RNA sequencing for Neo-epitope peptide prediction in buccal cancer",
    authors:
      "Karunakaran, C., Elias, J., Mandoli, N., Maurya, A. K., Kantharia, R., Mistry, Y., ... Khanna-Gupta, A.",
    journal: "Canadian Journal of Biotechnology",
    year: 2017,
    doi: "https://doi.org/10.24870/cjb.2017-a230",
  },
  {
    title:
      "A neoepitope derived from a novel germline Adenomatous polyposis coli (APC) gene mutation in Familial Adenomatous Polyposis (FAP) shows selective immunogenicity",
    authors:
      "Majumder, S., Shah, R., Elias, J., Mistry, Y., Karunakaran, C., Shah, P., ... Mahadevan, L.",
    journal: "Canadian Journal of Biotechnology",
    year: 2017,
    doi: "https://doi.org/10.24870/cjb.2017-a236",
  },
  {
    title:
      "OncoPeptVAC: A robust TCR binding algorithm to prioritize neoepitope using tumor mutation (DNAseq) and gene expression (RNAseq) data",
    authors:
      "Majumder, S., Kode, V., Shah, P., Kumar, A., Gupta, R., Chaudhuri, A., & Chakraborty, P.",
    journal: "Canadian Journal of Biotechnology",
    year: 2017,
    doi: "https://doi.org/10.24870/cjb.2017-a208",
  },
  {
    title:
      "An accurate machine learning approach to predict immunogenic peptides in human",
    authors: "Shah, P., Maurya, A. K., Gupta, R., Chaudhuri, A., & Gupta, R.",
    journal: "Canadian Journal of Biotechnology",
    year: 2017,
    doi: "https://doi.org/10.24870/cjb.2017-a209",
  },
];

const Publications = () => (
  <section className="section-container">
    <h2 className="centered-header">Publications & Posters</h2>
    <div className="publications-list">
      {publications.map((pub, index) => (
        <div key={index} className="publication-item">
          <h3 className="publication-title">{pub.title}</h3>
          <p className="publication-authors">
            <strong>Authors:</strong> {pub.authors}
          </p>
          <p className="publication-journal">
            <strong>Journal:</strong> {pub.journal}, {pub.year}
          </p>
          <p>
            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
              DOI: {pub.doi}
            </a>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Publications;

import { useState } from "react";
import "../css/Projects.css";
import onenp from "../docs/P03C1NP.pdf";
import onepp from "../docs/P03C1PP.pdf";
import twonp from "../docs/P03C2NP.pdf";
import pohled from "../docs/P03CPOHLED.pdf";
import rezaa from "../docs/P03CREZAA.pdf";
import pohledPic from "../img/pohled.png";

import hack4 from "../img/hack4.jpg";
import hack5 from "../img/hack5.jpg";
import soho1 from "../img/soho1.jpg";
import soho2 from "../img/soho2.jpg";
import metro1 from "../img/metro1.jpg";

const Projects = () => {
  const [selectedProj, setSelectedProj] = useState("ceskomor");
  const handleClick = (event) => {
    const { id } = event.currentTarget; // Get the id of the clicked div
    setSelectedProj(id); // Set the selectedProj state to the id
  };

  return (
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="select-con">
          <div className="selections">
            <div
              id="ceskomor"
              onClick={handleClick}
              className={`project-item ${
                selectedProj === "ceskomor" ? "selected" : ""
              }`}
              style={{ marginTop: "0px" }}
            >
              Českomoravská Metro
            </div>
            <div
              className={`project-item ${
                selectedProj === "residential" ? "selected" : ""
              }`}
              id="residential"
              onClick={handleClick}
            >
              Residential & Parking
            </div>
            <div
              id="schoolwork"
              onClick={handleClick}
              className={`project-item ${
                selectedProj === "schoolwork" ? "selected" : ""
              }`}
            >
              Administrative Building in Horoměřice
            </div>
            <div
              id="hackathon"
              onClick={handleClick}
              className={`project-item ${
                selectedProj === "hackathon" ? "selected" : ""
              }`}
            >
              Construction Hackathon 2025: Modular Housing
            </div>
          </div>
          <div className="project-card-con">
            {selectedProj === "ceskomor" && (
              <div className="project">
                <h3>Reconstruction of Českomoravská Metro Station in Prague</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Developed and modified structural and civil engineering
                      plans in AutoCAD & Revit for the reconstruction of a
                      subway station within a high traffic urban environment.
                      Performed quality control checks on
                      architectural/engineering drawings and corrected errors in
                      layouts, dimensions and technical details ensuring
                      accuracy and compliance with technical norms and
                      standards. Collaborated with multidisciplinary teams to
                      ensure design integration and coordinated design drawings
                      and documentation in compliance with Czech/European
                      building codes. Participated in on-site surveys, reviewed
                      construction quality and progress according to plans and
                      consulted with contractors during construction
                      phases.Performed structural analysis calculations for a
                      steel support frame carrying an HVAC air handling unit.
                    </p>
                  </div>
                  <div className="vid">
                    <img style={{ height: "150px" }} src={metro1} alt="graph" />
                  </div>
                  <div className="git">
                    <h4 style={{ marginTop: "10px" }}>Design Plans</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.linkedin.com/posts/qarta-architektura_jak-bude-vypadat-nov%C3%A1-stanice-metra-%C4%8Deskomoravsk%C3%A1-activity-7269698526534615040-6RNP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEIcTQB9xpbPvMXBPY3D72dvxRJumPt05k"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "15pt",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          LinkedIn Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "residential" && (
              <div className="project">
                <h3>Mixed use Residential & Parking Projects</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Created technical drawings and floor plan layouts for a
                      new SOHO residential development in Holešovice, Prague
                      under senior architect supervision. Designed a
                      multi-storey parking structure in Pec pod Sněžkou, serving
                      a hotel and ski resort visitors, including ramp geometry
                      calculation, circulation and space optimization. Assisted
                      with building permit documentation and partnered with
                      multidisciplinary teams to align design and technical
                      standards.
                    </p>
                  </div>
                  <div className="vid">
                    <img
                      style={{ height: "150px", marginRight: "15px" }}
                      src={soho1}
                      alt="graph"
                    />
                    <img style={{ height: "150px" }} src={soho2} alt="graph" />
                  </div>
                  <div className="git">
                    <h4 style={{ marginTop: "10px" }}>Design Plans</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.linkedin.com/posts/qarta-architektura_v-lednu-jsme-polo%C5%BEili-z%C3%A1kladn%C3%AD-k%C3%A1men-druh%C3%A9-activity-7309869708042780672-RUaP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEIcTQB9xpbPvMXBPY3D72dvxRJumPt05k"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "15pt",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          LinkedIn Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "schoolwork" && (
              <div className="project">
                <h3>Administrative Building in Horoměřice</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      This project involved the design of a new administrative
                      office building located in Horoměřice, Czech Republic. The
                      structure consists of one underground and two above-ground
                      floors, featuring a gabled roof and a reinforced concrete
                      foundation system. I was responsible for the technical
                      construction documentation, including architectural
                      layout, structural design using timber-concrete composite
                      floors, and thermal and acoustic insulation strategies.
                      The design ensures compliance with Czech building codes
                      for energy efficiency, accessibility, and fire safety. The
                      building integrates sustainable construction practices and
                      prioritizes functionality, comfort, and modern aesthetics.
                    </p>
                  </div>
                  <div className="vid">
                    <img
                      style={{ height: "195px" }}
                      src={pohledPic}
                      alt="graph"
                    />
                  </div>
                  <div className="git">
                    <h4 style={{ marginTop: "10px" }}>Design Plans</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href={onepp}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Basement Floor
                        </a>
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href={onenp}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          First Floor
                        </a>
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href={twonp}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Second Floor
                        </a>
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href={rezaa}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Section A-A
                        </a>
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href={pohled}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Front View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "hackathon" && (
              <div className="project">
                <h3>Construction Hackathon 2025: Modular Housing</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      I participated in a 48-hour hackathon focused on modular
                      construction, where our team explored innovative solutions
                      to improve building workflows. Guided by our mentor Milan
                      Rotek from Wienerberger, we designed a system integrating
                      a brick-laying robot to streamline construction processes.
                      Our solution aimed to enhance sustainability, increase
                      efficiency, and improve on-site safety through automation.
                      The experience offered valuable insight into the future of
                      construction technology and collaborative problem-solving.
                      I'm excited to continue exploring the intersection of
                      robotics and modern architecture.
                    </p>
                  </div>
                  <div className="vid">
                    <img style={{ height: "75px" }} src={hack4} alt="graph" />
                    <img style={{ height: "75px" }} src={hack5} alt="graph" />
                  </div>
                  <div className="git">
                    <h4 style={{ marginTop: "10px" }}>Design Plans</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.linkedin.com/feed/update/urn:li:activity:7312244605696069632/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "15pt",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          LinkedIn Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="skills"></div>
      </div>
    </div>
  );
};

export default Projects;

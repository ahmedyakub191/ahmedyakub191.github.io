import { useState } from "react";
import "../css/Projects.css";

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
          </div>
          <div className="project-card-con">
            {selectedProj === "ceskomor" && (
              <div className="project">
                <h3>Reconstruction of Českomoravská Metro Station in Prague</h3>
                <div className="project-info-con">
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
                </div>
              </div>
            )}
            {selectedProj === "residential" && (
              <div className="project">
                <h3>Mixed use Residential & Parking Projects</h3>
                <div className="project-info-con">
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

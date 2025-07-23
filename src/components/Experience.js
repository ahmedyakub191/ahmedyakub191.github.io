import React from "react";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@mui/icons-material/School";
// import WorkIcon from "@mui/icons-material/Work";
import "../css/Experience.css";

const Timeline = ({ title, events }) => (
  <div className="container">
    <h2>{title}</h2>
    <div className="timeline">
      {events.map((event, index) => (
        <div className="event" key={index}>
          <h4>{event.title}</h4>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);

function Experience() {
  const educationEvents = [
    {
      title: "Czech Technical University in Prague ",
      description: "Master's degree in Structural Engineering, 2024 - 2026",
    },
    {
      title: "Czech Technical University in Prague ",
      description: "Bachelor's degree in Civil Engineering, 2020 - 2024",
    },
  ];

  const experienceEvents = [
    {
      title: "QARTA Architektura",
      description: "Civil Engineer, 2024 - Present",
    },
    {
      title: "QARTA Architektura",
      description: "Civil Engineer intern 2022 - 2024",
    },
    {
      title: "Czech Technical University in Prague",
      description:
        "Researcher - AI & Robotics in Construction , 2022 - Present",
    },
    {
      title: "Freelance",
      description:
        "Self-employed - Laser Scanning & Documentation  2022 - Present",
    },
  ];

  return (
    <div className="exp-con">
      <h2 id="experience">Experience</h2>
      <div className="experience">
        <Timeline title="Education" events={educationEvents} />
        <Timeline title="Work Experience" events={experienceEvents} />
      </div>
    </div>
  );
}

export default Experience;

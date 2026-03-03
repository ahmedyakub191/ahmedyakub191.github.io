import { useState } from "react";
import "../css/Sections.css";
import {
  FaBriefcase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";
import resume from "../docs/Resume-YA.pdf";
import onenp from "../docs/P03C1NP.pdf";
import onepp from "../docs/P03C1PP.pdf";
import twonp from "../docs/P03C2NP.pdf";
import pohled from "../docs/P03CPOHLED.pdf";
import rezaa from "../docs/P03CREZAA.pdf";
import yapic from "../img/yapic.jpg";
import metro1 from "../img/metro1.jpg";
import soho1 from "../img/soho1.jpg";
import soho2 from "../img/soho2.jpg";
import pohledPic from "../img/pohled.png";
import hack4 from "../img/hack4.jpg";
import hack5 from "../img/hack5.jpg";
import ThreeStructuralScene from "./ThreeStructuralScene";

const projectCards = [
  {
    id: "metro",
    label: "Transit Infrastructure",
    period: "2024-Present",
    title: "Reconstruction of Ceskomoravska Metro Station",
    summary:
      "Developed and modified structural and civil engineering plans in AutoCAD & Revit for the reconstruction of a subway station within a high traffic urban environment. Performed quality control checks on architectural/engineering drawings and corrected errors in layouts, dimensions and technical details ensuring accuracy and compliance with technical norms and standards. Collaborated with multidisciplinary teams to ensure design integration and coordinated design drawings and documentation in compliance with Czech/European building codes. Participated in on-site surveys, reviewed construction quality and progress according to plans and consulted with contractors during construction phases. Performed structural analysis calculations for a steel support frame carrying an HVAC air handling unit.",
    image: metro1,
    links: [
      {
        label: "Project post",
        href: "https://www.linkedin.com/posts/qarta-architektura_jak-bude-vypadat-nov%C3%A1-stanice-metra-%C4%8Deskomoravsk%C3%A1-activity-7269698526534615040-6RNP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEIcTQB9xpbPvMXBPY3D72dvxRJumPt05k",
      },
    ],
  },
  {
    id: "residential",
    label: "Residential Development",
    period: "2024-Present",
    title: "Residential + Parking Developments",
    summary:
      "Created technical drawings and floor plan layouts for a new SOHO residential development in Holesovice, Prague under senior architect supervision. Designed a multi-storey parking structure in Pec pod Snezkou, serving a hotel and ski resort visitors, including ramp geometry calculation, circulation and space optimization. Assisted with building permit documentation and partnered with multidisciplinary teams to align design and technical standards.",
    images: [soho1, soho2],
    links: [
      {
        label: "Development post",
        href: "https://www.linkedin.com/posts/qarta-architektura_v-lednu-jsme-polo%C5%BEili-z%C3%A1kladn%C3%AD-k%C3%A1men-druh%C3%A9-activity-7309869708042780672-RUaP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEIcTQB9xpbPvMXBPY3D72dvxRJumPt05k",
      },
    ],
  },
  {
    id: "admin-building",
    label: "Academic Design",
    period: "2024",
    title: "Administrative Building in Horomerice",
    summary:
      "This project involved the design of a new administrative office building located in Horomerice, Czech Republic. The structure consists of one underground and two above-ground floors, featuring a gabled roof and a reinforced concrete foundation system. I was responsible for the technical construction documentation, including architectural layout, structural design using timber-concrete composite floors, and thermal and acoustic insulation strategies. The design ensures compliance with Czech building codes for energy efficiency, accessibility, and fire safety. The building integrates sustainable construction practices and prioritizes functionality, comfort, and modern aesthetics.",
    image: pohledPic,
    links: [
      { label: "Basement", href: onepp },
      { label: "First floor", href: onenp },
      { label: "Second floor", href: twonp },
      { label: "Section A-A", href: rezaa },
      { label: "Front view", href: pohled },
    ],
  },
  {
    id: "hackathon",
    label: "Innovation Sprint",
    period: "2025",
    title: "Construction Hackathon 2025: Modular Housing",
    summary:
      "I participated in a 48-hour hackathon focused on modular construction, where our team explored innovative solutions to improve building workflows. Guided by our mentor Milan Rotek from Wienerberger, we designed a system integrating a brick-laying robot to streamline construction processes. Our solution aimed to enhance sustainability, increase efficiency, and improve on-site safety through automation. The experience offered valuable insight into the future of construction technology and collaborative problem-solving. I am excited to continue exploring the intersection of robotics and modern architecture.",
    images: [hack4, hack5],
    links: [
      {
        label: "Hackathon post",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7312244605696069632/",
      },
    ],
  },
];

const education = [
  "PhD Robotics, Czech Technical University in Prague (2026-Present)",
  "MSc Structural Engineering, Czech Technical University in Prague (2024-2026)",
  "BSc Civil Engineering, Czech Technical University in Prague (2020-2024)",
];

const experience = [
  "Civil Engineer, QARTA Architektura (2024-Present)",
  "Civil Engineer Intern, QARTA Architektura (2022-2024)",
  "Researcher, AI and Robotics in Construction, CTU Prague (2022-Present)",
  "Freelance Laser Scanning and Technical Documentation (2022-Present)",
];

const Sections = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { targetId: "about", label: "About" },
    { targetId: "projects", label: "Projects" },
    { targetId: "experience", label: "Experience" },
    { targetId: "contact", label: "Contact" },
  ];

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setIsNavOpen(false);

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="yakub-site">
      <div className="bridge-scene-layer" aria-hidden="true">
        <ThreeStructuralScene />
        <div className="bridge-scene-overlay" />
      </div>

      <header className={`yakub-top-nav ${isNavOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="yakub-nav-toggle"
          onClick={() => setIsNavOpen((prev) => !prev)}
          aria-expanded={isNavOpen}
          aria-controls="yakub-nav-links"
        >
          Menu
        </button>
        <nav id="yakub-nav-links" className="yakub-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(event) => handleNavClick(event, link.targetId)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="yakub-content">
        <section className="hero" id="about">
          <div className="hero-content">
            <img src={yapic} alt="Yakub Ahmed" className="hero-avatar" />
            <p className="eyebrow">Structural Engineering Portfolio</p>
            <h1>Yakub Ahmed</h1>
            <ul className="hero-bullets">
              <li className="hero-copy">
                Structural Engineer and Robotics PhD student focused on the
                intersection of architecture, robotics, and civil systems.
              </li>
              <li className="hero-copy hero-copy-secondary">
                When I&apos;m not stydying or working, I also enjoy going to the
                gym, playing soccer, skiing, tennis and golfing.
              </li>
            </ul>
            <div className="hero-actions">
              <a href={resume} target="_blank" rel="noreferrer">
                <FaFilePdf /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/yakub-ahmed1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="content-block" id="projects">
          <div className="section-header">
            <h2>Selected Projects</h2>
          </div>
          <div className="project-showcase">
            {projectCards.map((project) => (
              <article key={project.id} className="project-panel">
                <div className="project-panel-head">
                  <span>{project.label}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-gallery">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                  {project.images &&
                    project.images.map((img, idx) => (
                      <img
                        key={`${project.id}-${idx}`}
                        src={img}
                        alt={project.title}
                      />
                    ))}
                </div>
                <div className="project-action-row">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <FaExternalLinkAlt />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block" id="experience">
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div className="experience-grid">
            <article className="experience-track">
              <div className="experience-track-head">
                <h3>
                  <FaGraduationCap /> Education
                </h3>
                <span>Foundation</span>
              </div>
              <ul>
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="experience-track">
              <div className="experience-track-head">
                <h3>
                  <FaBriefcase /> Work
                </h3>
                <span>Industry + Research</span>
              </div>
              <ul>
                {experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-block contact-block" id="contact">
          <h2>Contact</h2>
          <p>
            Reach out at{" "}
            <a href="mailto:ahmed.yakub191@gmail.com">
              ahmed.yakub191@gmail.com
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/yakub-ahmed-93573124a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:ahmed.yakub191@gmail.com" className="contact-link">
            <FaEnvelope /> Email
          </a>
        </section>
      </main>
    </div>
  );
};

export default Sections;

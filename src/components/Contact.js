// Contact.js
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../css/Contact.css"; // Import the stylesheet

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div style={{ height: "52px" }}></div>
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p className="cnt">
          Feel free to reach out! You can contact me via email at{" "}
          <a href="mailto:ahmed.yakub191@gmail.com">
            <FaEnvelope /> ahmed.yakub191@gmail.com
          </a>{" "}
          or connect with me on:
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/yakub-ahmed-93573124a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;

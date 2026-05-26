import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import "./Contact.css";

const Contact = () => {
  return (
    <SectionWrapper title="Contact Me">
      <p className="contact-subtitle">
        I'm currently open to new opportunities. Feel free to reach out.
      </p>
      <div className="contact-container space-y-4">
        <a href="mailto:your-email@example.com" className="contact-card">
          <FiMail className="contact-icon" />
          <div>
            <p className="contact-label">Email</p>
            <p className="contact-value">dcamp090799@gmail.com</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/dcisxo"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FiLinkedin className="contact-icon" />
          <div>
            <p className="contact-label">LinkedIn</p>
            <p className="contact-value">dcisxo</p>
          </div>
        </a>
        <a
          href="https://github.com/dcisxo"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FiGithub className="contact-icon" />
          <div>
            <p className="contact-label">GitHub</p>
            <p className="contact-value">dcisxo</p>
          </div>
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

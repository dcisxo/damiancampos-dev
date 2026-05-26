import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { submitContact } from "../../api/contact";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper title="Contact Me">
      <p className="contact-subtitle">
        I'm currently open to new opportunities. Feel free to reach out.
      </p>

      <div className="contact-container space-y-4">
        <a href="mailto:damian.exe@gmail.com" className="contact-card">
          <FiMail className="contact-icon" />
          <div>
            <p className="contact-label">Email</p>
            <p className="contact-value">damian.exe@gmail.com</p>
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

      {/* Contact Form */}
      <div className="contact-form-section">
        <h3 className="text-lg font-semibold text-white mb-4">
          Or send me a message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="form-input"
            name="message"
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center min-h-screen px-6 text-white">
      <div className="max-w-2xl">
        <p className="hero-greeting text-blue-400 font-medium mb-3">Hi, I'm</p>
        <h1 className="hero-name text-5xl font-bold mb-4">Damian Campos</h1>
        <h2 className="hero-title text-2xl text-gray-400 font-medium mb-6">
          Full Stack Developer
        </h2>
        <p className="hero-bio text-gray-300 text-lg mb-10 leading-relaxed">
          I build full stack web applications using React, Node.js, and SQL. I
          enjoy building tools that solve real problems and improve workflows.
        </p>
        <div className="hero-ctas flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="hero-btn-primary px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 font-medium"
          >
            View Projects
          </Link>
          <a
            href="/damian-campos-resume.pdf"
            download
            className="hero-btn-secondary px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-white font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

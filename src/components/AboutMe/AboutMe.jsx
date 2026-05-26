import SectionWrapper from "../SectionWrapper/SectionWrapper";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <SectionWrapper title="About Me">
      <div className="max-w-2xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          I got into software development because I love solving problems.
          There's something satisfying about taking a real-world challenge and
          breaking it down into something a computer can actually handle — and
          then seeing it work.
        </p>
        <p>
          Right now I'm focused on building my full stack skills: creating REST
          APIs with Node.js and Express, working with relational databases using
          PostgreSQL, and building clean, responsive UIs with React and Tailwind
          CSS.
        </p>
        <p>
          I want to work on products that people actually use — tools that save
          time, reduce friction, or make someone's day a little easier. I'm
          looking for a junior full stack or software developer role where I can
          keep growing and contribute to a real team.
        </p>
        <div>
          <p className="text-white font-semibold mb-3">
            Technologies I work with:
          </p>
          <ul className="grid grid-cols-2 gap-1 text-base">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "SQL",
              "Tailwind CSS",
              "REST APIs",
              "Git",
              "HTML / CSS",
            ].map((tech) => (
              <li key={tech} className="tech-list-item flex items-center gap-2">
                <span className="text-blue-400">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;

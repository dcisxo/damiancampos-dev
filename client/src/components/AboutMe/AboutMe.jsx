import SectionWrapper from "../SectionWrapper/SectionWrapper";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <SectionWrapper title="About Me">
      <div className="max-w-2xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          I got into software development because I love solving problems.
          There's something satisfying about taking a real-world challenge,
          breaking it down into something a computer can actually handle, and
          watching it work.
        </p>
        <p>
          Before code, I spent nearly a decade running a painting contracting
          business. That meant managing clients, quoting jobs, solving problems
          on-site with no one to hand it off to, and delivering results people
          were paying real money for. When I started learning to code, I noticed
          the overlap immediately — a bug in production isn't that different
          from a crack you find behind drywall after the job's "done." You don't
          get to ignore it just because it's inconvenient. You figure out what's
          actually load-bearing and fix it right. That mindset — own it,
          diagnose it, finish it — is what I bring to development now.
        </p>
        <p>
          Right now I'm focused on building my full-stack skills: creating REST
          APIs with Node.js and Express, working with MongoDB, and building
          clean, responsive UIs with React and Tailwind CSS. My primary project,
          HireRank, is a dual-sided job board I built solo from scratch — front
          end, back end, and deployment — to get real hands-on experience with
          the full stack instead of just following tutorials.
        </p>
        <p>
          I'm especially drawn to gaming and entertainment tech — I'm a longtime
          PC gamer and anime fan, and I'd love to build tools for companies in
          that space. I'm also interested in healthtech, where good software
          directly makes someone's day easier or a process less painful. Either
          way, I want to work on products people actually use, on a team where I
          can keep learning and pull my weight from day one.
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
              "MongoDB",
              "REST APIs",
              "Tailwind CSS",
              "Git",
              "HTML / CSS",
              "JWT Auth",
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

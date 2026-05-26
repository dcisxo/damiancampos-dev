import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const techs = [
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, label: "React", color: "text-cyan-400" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { icon: SiPostgresql, label: "SQL", color: "text-blue-400" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
];

import "./TechStack.css";

const TechStack = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-300">
        Technologies I Work With
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-2xl mx-auto">
        {techs.map(({ icon: Icon, label, color }) => (
          <div key={label} className="tech-icon-item flex flex-col items-center gap-2">
            <Icon className={`text-5xl ${color}`} />
            <span className="tech-label text-sm text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;


import "./about.css";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiFigma,
} from "react-icons/si";

const stats = [
  { number: "5+", label: "YEARS OF EXPERIENCE" },
  { number: "75+", label: "PROJECTS DELIVERED" },
  { number: "6+", label: "COUNTRIES WORKED WITH" },
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          code, creativity
          <span> & technology.</span>
        </h2>

        <p className="about-description">
          I'm Brian Gitonga, a software engineer passionate about building
          meaningful digital products, scalable applications and intelligent
          solutions that solve real-world problems.
        </p>

        {/* Statistics */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <a href="/about" className="about-link">
          MORE ABOUT ME <span>↗</span>
        </a>
      </div>

      {/* Infinite technology carousel */}
      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                className="tech-marquee-item"
                key={`${tech.name}-${index}`}
                aria-hidden={index >= technologies.length}
              >
                <Icon />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

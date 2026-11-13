
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./projects-page.css";

const categories = [
  "All",
  "Websites",
  "Mobile Apps",
  "AI & Automation",
  "Custom Software",
];

const projects = [
  {
    number: "01",
    title: "Letaipa Foundation",
    category: "Websites",
    type: "WEBSITE DEVELOPMENT",
    description:
      "A digital platform for a foundation, designed to communicate its mission, share updates and make information accessible.",
    technologies: ["Next.js", "Supabase", "Vercel"],
    image: "/images/projects/letaipa.jpg",
    slug: "letaipa-foundation",
    featured: true,
  },
  {
    number: "02",
    title: "Web Application",
    category: "Websites",
    type: "WEB APPLICATION",
    description:
      "A modern web application concept focused on delivering a clean, responsive and intuitive user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/web-app.jpg",
    slug: "web-application",
  },
  {
    number: "03",
    title: "Mobile Experience",
    category: "Mobile Apps",
    type: "MOBILE APPLICATION",
    description:
      "A cross-platform mobile application concept built around accessibility, usability and a smooth mobile experience.",
    technologies: ["React Native", "API Integration"],
    image: "/images/projects/mobile-app.jpg",
    slug: "mobile-app",
  },
  {
    number: "04",
    title: "AI Automation System",
    category: "AI & Automation",
    type: "AI & AUTOMATION",
    description:
      "An intelligent workflow solution concept designed to reduce repetitive tasks and connect business processes.",
    technologies: ["Python", "AI Integration", "APIs"],
    image: "/images/projects/ai-automation.jpg",
    slug: "ai-automation",
  },
  {
    number: "05",
    title: "Custom Business Platform",
    category: "Custom Software",
    type: "CUSTOM SOFTWARE",
    description:
      "A business software concept for managing information, workflows and day-to-day operations in one place.",
    technologies: ["Next.js", "PostgreSQL", "Node.js"],
    image: "/images/projects/custom-software.jpg",
    slug: "custom-software",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="projects-page">
      {/* PROJECT GALLERY */}
      <section className="projects-gallery" id="project-gallery">
        <div className="projects-gallery-heading">
          <div className="projects-page-label">
            <span>01 — SELECTED PROJECTS</span>
            <span>{filteredProjects.length} PROJECTS</span>
          </div>

          <div className="projects-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-page-grid">
          {filteredProjects.map((project) => (
            <article className="projects-page-card" key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="projects-card-image"
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="projects-image-placeholder">
                  <span>{project.number}</span>
                  <strong>{project.title}</strong>
                  <small>PROJECT PREVIEW</small>
                </div>

                <span className="projects-card-arrow">↗</span>
              </Link>

              <div className="projects-card-info">
                <div className="projects-card-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="projects-card-title"
                >
                  <h2>{project.title}</h2>
                  <span>↗</span>
                </Link>

                <p>{project.description}</p>

                <div className="projects-card-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">No projects in this category yet.</p>
        )}
      </section>
    </main>
  );
}


import { useEffect, useState } from "react";
import "./projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Letaipa Foundation",
    category: "website",
    categoryLabel: "WEBSITE",
    description:
      "A digital platform for a foundation, built to communicate its mission, share updates and connect with its audience.",
    technologies: ["Next.js", "Supabase", "CSS"],
    images: [
      "/images/projects/letaipa-1.jpg",
      "/images/projects/letaipa-2.jpg",
      "/images/projects/letaipa-3.jpg",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Web Application",
    category: "website",
    categoryLabel: "WEB APPLICATION",
    description:
      "A modern web application with a responsive interface and a scalable application architecture.",
    technologies: ["React", "Node.js", "MongoDB"],
    images: [
      "/images/projects/webapp-1.jpg",
      "/images/projects/webapp-2.jpg",
      "/images/projects/webapp-3.jpg",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Mobile App",
    category: "mobile",
    categoryLabel: "MOBILE APP",
    description:
      "A mobile-first product concept focused on a clean user experience across devices.",
    technologies: ["React Native", "API", "Firebase"],
    images: [
      "/images/projects/mobile-1.jpg",
      "/images/projects/mobile-2.jpg",
      "/images/projects/mobile-3.jpg",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "AI Automation",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    description:
      "An intelligent workflow concept designed to reduce repetitive business processes and improve efficiency.",
    technologies: ["Python", "AI", "APIs"],
    images: [
      "/images/projects/automation-1.jpg",
      "/images/projects/automation-2.jpg",
      "/images/projects/automation-3.jpg",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Custom Software",
    category: "software",
    categoryLabel: "CUSTOM SOFTWARE",
    description:
      "A tailored software solution concept for managing information, workflows and business operations.",
    technologies: ["React", "Express", "PostgreSQL"],
    images: [
      "/images/projects/software-1.jpg",
      "/images/projects/software-2.jpg",
      "/images/projects/software-3.jpg",
    ],
  },
];

const filters = [
  { label: "ALL", value: "all" },
  { label: "WEBSITES", value: "website" },
  { label: "MOBILE APPS", value: "mobile" },
  { label: "AI & AUTOMATION", value: "ai" },
  { label: "CUSTOM SOFTWARE", value: "software" },
];

function ProjectCard({ project }) {
  const [imageIndex, setImageIndex] = useState(0);

  const previousImage = () => {
    setImageIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setImageIndex((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <div className="project-image-placeholder">
          <span>PROJECT PREVIEW</span>
        </div>

        <img
          key={project.images[imageIndex]}
          className="project-image"
          src={project.images[imageIndex]}
          alt={`${project.title} screenshot ${imageIndex + 1}`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="project-image-overlay">
          <span className="project-image-count">
            {String(imageIndex + 1).padStart(2, "0")} /{" "}
            {String(project.images.length).padStart(2, "0")}
          </span>

          <div className="project-image-controls">
            <button
              type="button"
              onClick={previousImage}
              aria-label={`Previous ${project.title} image`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label={`Next ${project.title} image`}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span>{project.number} / {project.categoryLabel}</span>
          <span className="project-status">SELECTED WORK</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-card-bottom">
          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <a href="#contact" className="project-view-link">
            LET'S TALK <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 950) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const previousProjects = () => {
    setCurrentIndex((current) => Math.max(0, current - 1));
  };

  const nextProjects = () => {
    setCurrentIndex((current) => Math.min(maxIndex, current + 1));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-topline">
          <span>02 — PROJECTS / PORTFOLIO</span>
        </div>

        <div className="projects-heading">
          <div>
            <h2>
              THINGS I'VE
              <br />
              BUILT<span>.</span>
            </h2>
          </div>

          <p>
            A collection of digital products, applications and experiences
            I've brought to life through code and creativity.
          </p>
        </div>

        <div className="projects-toolbar">
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={
                  activeFilter === filter.value ? "active" : ""
                }
                onClick={() => changeFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <span className="projects-total">
            {String(filteredProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="projects-carousel">
          <div
            className="projects-grid"
            key={`${activeFilter}-${currentIndex}-${visibleCount}`}
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="projects-empty">No projects in this category yet.</p>
          )}
        </div>

        <div className="projects-navigation">
          <span>
            SHOWING {filteredProjects.length === 0 ? "00" : String(currentIndex + 1).padStart(2, "0")}
            {" — "}
            {String(Math.min(currentIndex + visibleCount, filteredProjects.length)).padStart(2, "0")}
            {" / "}
            {String(filteredProjects.length).padStart(2, "0")}
          </span>

          <div className="projects-arrows">
            <button
              type="button"
              onClick={previousProjects}
              disabled={currentIndex === 0}
              aria-label="Previous projects"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextProjects}
              disabled={currentIndex >= maxIndex}
              aria-label="Next projects"
            >
              →
            </button>
          </div>
        </div>

        

      </div>
    </section>
  );
}

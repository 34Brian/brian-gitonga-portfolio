
import { useState } from "react";
import { Link } from "react-router-dom";
import "./services.css";

const services = [
  {
    number: "01",
    symbol: "</>",
    title: "Web Development",
    description:
      "Fast, modern and responsive websites and web applications designed to help businesses grow.",
    technologies: ["React", "Next.js", "Node.js", "Django"],
    link: "/services/web-development",
  },
  {
    number: "02",
    symbol: "▣",
    title: "Mobile App Development",
    description:
      "Intuitive mobile applications that bring your ideas to life across Android and iOS devices.",
    technologies: ["React Native", "Flutter", "API Integration"],
    link: "/services/mobile-development",
  },
  {
    number: "03",
    symbol: "✳",
    title: "AI & Automation",
    description:
      "Smarter business operations through AI integrations, automated workflows and intelligent systems.",
    technologies: ["AI Integration", "Python", "Workflow Automation"],
    link: "/services/ai-automation",
  },
  {
    number: "04",
    symbol: "⌘",
    title: "Custom Software",
    description:
      "Purpose-built digital solutions, platforms and business systems tailored to your needs.",
    technologies: ["Dashboards", "CRM Systems", "IoT"],
    link: "/services/custom-software",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-topline">
          <span>03 — WHAT I DO</span>
        </div>

        <div className="services-heading">
          <h2>
            TURNING IDEAS
            <br />
            INTO <span>REALITY.</span>
          </h2>
        </div>

        <div className="services-list">
          {services.map((service) => {
            const isActive = activeService === service.number;

            return (
              <article
                className={`service-card ${isActive ? "active" : ""}`}
                key={service.number}
                onMouseEnter={() => setActiveService(service.number)}
                onMouseLeave={() => setActiveService(null)}
              >
                <button
                  className="service-card-trigger"
                  onClick={() =>
                    setActiveService(isActive ? null : service.number)
                  }
                  aria-expanded={isActive}
                >
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-symbol">
                    {service.symbol}
                  </span>

                  <h3>{service.title}</h3>

                  <span className="service-arrow">
                    ↗
                  </span>
                </button>

                <div className="service-details">
                  <div className="service-details-inner">
                    <p>{service.description}</p>

                    <div className="service-card-bottom">
                      <div className="service-tags">
                        {service.technologies.map((technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={service.link}
                        className="service-view-link"
                      >
                        VIEW SERVICE ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import "./services-page.css";

const services = [
  {
    number: "01",
    symbol: "</>",
    title: "Web Development",
    subtitle: "Websites & Web Applications",
    description:
      "I design and develop modern digital experiences that help businesses establish their online presence, reach more customers and operate more effectively.",
    features: [
      "Business and corporate websites",
      "Custom web applications",
      "E-commerce platforms",
      "Landing pages and web experiences",
      "API development and integrations",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "Django"],
    slug: "web-development",
  },
  {
    number: "02",
    symbol: "▣",
    title: "Mobile App Development",
    subtitle: "Android & iOS Applications",
    description:
      "I build intuitive mobile applications that make your ideas accessible on the devices people use every day. From concept to deployment, the focus is on performance and user experience.",
    features: [
      "Cross-platform mobile applications",
      "Business and customer-facing apps",
      "API and backend integrations",
      "App UI implementation",
      "Maintenance and improvements",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "REST APIs"],
    slug: "mobile-development",
  },
  {
    number: "03",
    symbol: "✳",
    title: "AI & Automation",
    subtitle: "Intelligent Business Solutions",
    description:
      "I help businesses reduce repetitive work and make better use of technology through practical AI integrations, intelligent workflows and connected business systems.",
    features: [
      "Business workflow automation",
      "AI-powered assistants and chatbots",
      "CRM and business process integrations",
      "Lead management automation",
      "Custom AI integrations",
    ],
    technologies: ["Python", "AI Integrations", "APIs", "Automation Platforms"],
    slug: "ai-automation",
  },
  {
    number: "04",
    symbol: "⌘",
    title: "Custom Software",
    subtitle: "Systems Built Around Your Business",
    description:
      "When off-the-shelf tools don't fit, I build custom software around the way your business actually works, helping teams manage information, processes and operations.",
    features: [
      "Custom business management systems",
      "CRM and internal dashboards",
      "IoT and connected solutions",
      "Database and backend architecture",
      "Third-party system integrations",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
    slug: "custom-software",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your idea, understand the challenge and define what success should look like.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I map out the solution, define the technical direction and plan the experience before development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn the plan into a working product, sharing progress and keeping communication open.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "After testing and delivery, I help you move forward with improvements and ongoing support where needed.",
  },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-page-hero">
        <div className="services-page-label">
          <span>WHAT I CAN DO FOR YOU</span>
          <span>CAPABILITIES / 2026</span>
        </div>

        <h1>
          IDEAS INTO
          <br />
          <span>FUNCTIONAL</span>
          <br />
          EXPERIENCES.
        </h1>

        <div className="services-hero-bottom">
          <p>
            I build digital products, intelligent systems and technology
            solutions that help businesses move forward.
          </p>

          <a href="#services-list" className="services-scroll-link">
            EXPLORE SERVICES <span>↓</span>
          </a>
        </div>

        <span className="services-hero-decoration">✳</span>
      </section>

      {/* SERVICES */}
      <section className="services-page-list" id="services-list">
        <div className="services-page-section-label">
          <span>01 — WHAT I OFFER</span>
          <span>FOUR AREAS OF FOCUS</span>
        </div>

        <div className="services-page-items">
          {services.map((service) => (
            <article className="services-page-item" key={service.number}>
              <div className="services-page-item-heading">
                <span className="services-page-number">{service.number}</span>
                <span className="services-page-symbol">{service.symbol}</span>
              </div>

              <div className="services-page-item-content">
                <div className="services-page-item-title">
                  <p>{service.subtitle}</p>
                  <h2>{service.title}</h2>
                  <p className="services-page-description">
                    {service.description}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="services-page-detail-link"
                  >
                    EXPLORE SERVICE <span>↗</span>
                  </Link>
                </div>

                <div className="services-page-item-features">
                  <h3>WHAT'S INCLUDED</h3>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>↗</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="services-tech-heading">TECHNOLOGIES</h3>

                  <div className="services-page-tags">
                    {service.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="services-why">
        <div className="services-page-section-label">
          <span>02 — THE DIFFERENCE</span>
          <span>BEYOND JUST CODE</span>
        </div>

        <div className="services-why-content">
          <h2>
            TECHNOLOGY
            <br />
            SHOULD SOLVE
            <br />
            <span>REAL PROBLEMS.</span>
          </h2>

          <div className="services-why-copy">
            <p className="services-why-lead">
              I don't believe in building technology just for the sake of
              building it.
            </p>

            <p>
              Good software should make something easier, create an opportunity
              or solve a problem that matters. That's the thinking I bring into
              every project.
            </p>

            <div className="services-why-points">
              <div>
                <strong>01</strong>
                <span>Solutions shaped around your goals</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Clear communication throughout the project</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Scalable and maintainable development</span>
              </div>
              <div>
                <strong>04</strong>
                <span>A focus on long-term value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <div className="services-page-section-label">
          <span>03 — HOW I WORK</span>
          <span>FROM IDEA TO DELIVERY</span>
        </div>

        <h2>
          A CLEAR PROCESS.
          <br />
          <span>BETTER OUTCOMES.</span>
        </h2>

        <div className="services-process-grid">
          {process.map((step) => (
            <article className="services-process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

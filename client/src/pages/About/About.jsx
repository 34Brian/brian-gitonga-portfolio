
import { Link } from "react-router-dom";
import "./about-page.css";


const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Before writing code, I take time to understand the problem, the people experiencing it and the outcome we're trying to achieve.",
  },
  {
    number: "02",
    title: "Build with intention",
    description:
      "Every design decision, feature and line of code should serve a purpose. I focus on creating solutions that are useful, reliable and easy to use.",
  },
  {
    number: "03",
    title: "Keep evolving",
    description:
      "Technology never stands still. I keep learning, experimenting and exploring better ways to build digital products.",
  },
];


export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-page-hero">
        <div className="about-page-hero-top">
          <span>01 — GET TO KNOW ME</span>
          <span>SOFTWARE ENGINEER / CREATIVE THINKER</span>
        </div>

        <div className="about-page-hero-content">
          <div className="about-page-hero-text">
            <p className="about-page-eyebrow">HELLO, I'M BRIAN GITONGA.</p>

            <h1>
              BEYOND
              <br />
              THE <span>CODE.</span>
            </h1>

            <p className="about-page-intro">
              I'm a software engineer who enjoys turning ideas into meaningful
              digital experiences, building intelligent systems and solving
              problems through technology.
            </p>

            <a href="#my-story" className="about-page-scroll">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>

          <div className="about-page-portrait">
            <img src="/designer.png" alt="Brian Gitonga" />
            <span className="portrait-caption">
              BRIAN GITONGA — SOFTWARE ENGINEER
            </span>
            <span className="portrait-decoration">✳</span>
          </div>
        </div>
        
        <div className="about-page-hero-bottom">
          <span>BASED IN KENYA</span>
          <span>WORKING WITH THE WORLD</span>
        </div>
      </section>

      {/* MY STORY */}
      <section className="about-story" id="my-story">
        <div className="about-section-label">
          <span>02 — MY STORY</span>
          <span>A LITTLE CONTEXT</span>
        </div>

        <div className="about-story-grid">
          <h2>
            IT STARTED
            <br />
            WITH <span>CURIOSITY.</span>
          </h2>

          <div className="about-story-content">
            <p className="about-story-lead">
              I've always been fascinated by what technology makes possible.
            </p>

            <p>
              Growing up in Kenya, my curiosity about computers, gadgets and
              the digital world gradually turned into something much bigger.
              What started as an interest in understanding how things worked
              became a passion for creating things myself.
            </p>

            <p>
              That curiosity led me into software engineering, where I found
              the opportunity to combine creativity, logic and problem-solving
              to build things that have a real purpose.
            </p>

            <p>
              Today, I work across web development, mobile applications,
              custom software and AI-powered solutions. I enjoy working with
              different people, understanding their ideas and helping turn
              those ideas into working products.
            </p>

            <p>
              For me, it's never just about writing code. It's about what
              that code makes possible.
            </p>

            <Link to="/projects" className="about-page-link">
              EXPLORE MY WORK <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-experience">
        <div className="about-section-label">
          <span>03 — THE JOURNEY SO FAR</span>
          <span>EXPERIENCE & BACKGROUND</span>
        </div>

        <div className="about-experience-content">
          <h2>
            LEARNING.
            <br />
            BUILDING.
            <br />
            <span>EVOLVING.</span>
          </h2>

          <div className="about-experience-details">
            <p>
              Over the years, I've worked on different kinds of digital
              solutions, from web applications and websites to IoT-related
              projects and intelligent systems.
            </p>

            <div className="about-experience-stat">
              <strong>5+</strong>
              <span>YEARS OF SOFTWARE DEVELOPMENT EXPERIENCE</span>
            </div>

            <p>
              Each project has taught me something different: how to approach
              complex problems, work with different teams and build with the
              people using the product in mind.
            </p>
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="about-approach">
        <div className="about-section-label">
          <span>04 — WHAT GUIDES ME</span>
          <span>MY APPROACH</span>
        </div>

        <h2>
          HOW I THINK.
          <br />
          HOW I <span>BUILD.</span>
        </h2>

        <div className="about-principles">
          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span className="about-principle-number">
                {principle.number}
              </span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>

              <span className="about-principle-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

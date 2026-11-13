
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const navigation = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/#about" },
  { label: "PROJECTS", to: "/#projects" },
  { label: "SERVICES", to: "/#services" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/#contact" },
];

const socials = [
  { label: "GITHUB", url: "https://github.com/" },
  { label: "LINKEDIN", url: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">

        {/* Main CTA */}
        <div className="footer-cta">
          <div className="footer-eyebrow">
            <span>HAVE A PROJECT IN MIND?</span>
            <span>LET'S MAKE SOMETHING GREAT</span>
          </div>

          <h2>
            HAVE AN IDEA?
            <br />
            <span>LET'S BUILD IT.</span>
          </h2>

          <a
            href="mailto:briangitonga3@gmail.com"
            className="footer-contact-button"
          >
            START A PROJECT
            <span>↗</span>
          </a>
        </div>

        {/* Footer details */}
        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              BG<span>.</span>
            </Link>

            <p>
              Software engineer passionate about building
              meaningful digital products, intelligent systems
              and experiences that make a difference.
            </p>
            
          </div>
          

          <div className="footer-links">
            <h3>EXPLORE</h3>

            {navigation.map((item) => (
              <Link to={item.to} key={item.label}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-socials">
            <h3>CONNECT</h3>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label} <span>↗</span>
              </a>
            ))}

            <a href="mailto:briangitonga3@gmail.com">
              EMAIL ME <span>↗</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BRIAN GITONGA</span>

          <span>DESIGNED & BUILT WITH INTENTION.</span>

          <a href="#top">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

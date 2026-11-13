import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PROJECTS", path: "/projects" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="navbar">

        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          BRIAN<span>.</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a href="/Brian-Gitonga-CV.pdf" className="btn-cv" download>
          DOWNLOAD CV <span>↗</span>
        </a>

      </div>
    </header>
  );
}
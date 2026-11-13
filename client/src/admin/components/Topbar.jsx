
import { FiMenu, FiBell, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="admin-topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>

        <div className="breadcrumb">
          <span>Workspace</span>
          <span>/</span>
          <strong>Overview</strong>
        </div>
      </div>

      <div className="topbar-right">
        <Link to="/" target="_blank" className="view-portfolio">
          <span>View portfolio</span>
          <FiExternalLink />
        </Link>

        <button className="notification-btn" aria-label="Notifications">
          <FiBell />
          <span className="notification-dot" />
        </button>

        <div className="topbar-avatar">BG</div>
      </div>
    </header>
  );
}

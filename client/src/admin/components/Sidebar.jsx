
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiFileText,
  FiBriefcase,
  FiLayers,
  FiMail,
  FiImage,
  FiUser,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

const navigation = [
  {
    title: "WORKSPACE",
    links: [
      { name: "Overview", path: "/admin", icon: FiGrid, end: true },
      { name: "Projects", path: "/admin/projects", icon: FiFolder },
      { name: "Blog & Articles", path: "/admin/blog", icon: FiFileText },
      { name: "Experience", path: "/admin/experience", icon: FiBriefcase },
      { name: "Tech Stack", path: "/admin/tech-stack", icon: FiLayers },
    ],
  },
  {
    title: "MANAGEMENT",
    links: [
      { name: "Messages", path: "/admin/messages", icon: FiMail },
      { name: "Media Library", path: "/admin/media", icon: FiImage },
      { name: "Profile", path: "/admin/profile", icon: FiUser },
    ],
  },
];

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside className={`admin-sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <div className="admin-brand">
          <div className="brand-symbol">BG</div>
          <div>
            <h2>BRIAN GITONGA</h2>
            <span>PORTFOLIO CMS</span>
          </div>
        </div>

        <button
          className="sidebar-close"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
      </div>

      <div className="sidebar-body">
        {navigation.map((group) => (
          <div className="sidebar-group" key={group.title}>
            <p className="sidebar-label">{group.title}</p>

            {group.links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.end}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <NavLink to="/admin/settings" className="sidebar-link">
          <FiSettings />
          <span>Settings</span>
        </NavLink>

        <div className="sidebar-user">
          <div className="user-avatar">BG</div>

          <div className="user-info">
            <strong>Brian Gitonga</strong>
            <span>Administrator</span>
          </div>

          <FiLogOut className="logout-icon" />
        </div>
      </div>
    </aside>
  );
}

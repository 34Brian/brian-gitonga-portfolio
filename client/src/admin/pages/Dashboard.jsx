
import {
  FiFolder,
  FiFileText,
  FiMail,
  FiEye,
  FiArrowUpRight,
  FiPlus,
  FiMoreHorizontal,
  FiExternalLink,
  FiClock,
} from "react-icons/fi";

import "../styles/dashboard.css";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    icon: FiFolder,
  },
  {
    title: "Published Articles",
    value: "08",
    change: "+3 this month",
    icon: FiFileText,
  },
  {
    title: "Total Messages",
    value: "24",
    change: "+6 this week",
    icon: FiMail,
  },
  {
    title: "Portfolio Views",
    value: "1,284",
    change: "+12.8% this month",
    icon: FiEye,
  },
];

const projects = [
  {
    name: "Gennova Technologies",
    category: "Web Development",
    status: "Published",
    date: "Nov 08, 2026",
  },
  {
    name: "Letaipa Foundation",
    category: "Web Development",
    status: "Published",
    date: "Nov 05, 2026",
  },
  {
    name: "AI Automation Platform",
    category: "AI & Automation",
    status: "Draft",
    date: "Nov 03, 2026",
  },
];

const messages = [
  {
    name: "James Mwangi",
    email: "james@example.com",
    subject: "Website Development",
    time: "2 hours ago",
    initials: "JM",
  },
  {
    name: "Sarah Kim",
    email: "sarah@example.com",
    subject: "AI Automation Project",
    time: "Yesterday",
    initials: "SK",
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    subject: "Collaboration Opportunity",
    time: "2 days ago",
    initials: "DW",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Page heading */}
      <div className="dashboard-heading">
        <div>
          <span className="dashboard-eyebrow">TUESDAY, NOVEMBER 10, 2026</span>
          <h1>Good morning, Brian <span>👋</span></h1>
          <p>Here's what's happening with your portfolio today.</p>
        </div>

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="dashboard-outline-btn"
        >
          View website <FiExternalLink />
        </a>
      </div>

      {/* Statistics */}
      <div className="dashboard-stats">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="dashboard-stat-card" key={stat.title}>
              <div className="stat-card-top">
                <span>{stat.title}</span>
                <div className="stat-icon">
                  <Icon />
                </div>
              </div>

              <h2>{stat.value}</h2>

              <div className="stat-card-bottom">
                <span className="stat-positive">
                  <FiArrowUpRight />
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main dashboard content */}
      <div className="dashboard-grid">

        {/* Projects */}
        <section className="dashboard-panel projects-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent Projects</h3>
              <p>Your latest portfolio projects</p>
            </div>

            <a href="/admin/projects" className="panel-link">
              View all <FiArrowUpRight />
            </a>
          </div>

          <div className="projects-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>PROJECT</th>
                  <th>CATEGORY</th>
                  <th>STATUS</th>
                  <th>UPDATED</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr key={project.name}>
                    <td className="project-name">{project.name}</td>
                    <td>{project.category}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          project.status === "Published"
                            ? "published"
                            : "draft"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td>{project.date}</td>
                    <td>
                      <button className="table-action" aria-label="Project options">
                        <FiMoreHorizontal />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Messages */}
        <section className="dashboard-panel messages-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent Messages</h3>
              <p>Latest contact submissions</p>
            </div>

            <a href="/admin/messages" className="panel-link">
              View all <FiArrowUpRight />
            </a>
          </div>

          <div className="messages-list">
            {messages.map((message) => (
              <div className="message-item" key={message.email}>
                <div className="message-avatar">{message.initials}</div>

                <div className="message-details">
                  <strong>{message.name}</strong>
                  <span>{message.subject}</span>
                  <small>{message.time}</small>
                </div>

                <button aria-label="Message options" className="table-action">
                  <FiMoreHorizontal />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Quick actions */}
      <section className="quick-actions-section">
        <div className="panel-heading">
          <div>
            <h3>Quick Actions</h3>
            <p>Manage your portfolio content</p>
          </div>
        </div>

        <div className="quick-actions">
          <a href="/admin/projects" className="quick-action-card">
            <div className="quick-action-icon"><FiFolder /></div>
            <div>
              <strong>Add New Project</strong>
              <span>Create a portfolio project</span>
            </div>
            <FiPlus className="quick-action-arrow" />
          </a>

          <a href="/admin/blog" className="quick-action-card">
            <div className="quick-action-icon"><FiFileText /></div>
            <div>
              <strong>Write an Article</strong>
              <span>Publish a new blog post</span>
            </div>
            <FiPlus className="quick-action-arrow" />
          </a>

          <a href="/admin/messages" className="quick-action-card">
            <div className="quick-action-icon"><FiMail /></div>
            <div>
              <strong>Check Messages</strong>
              <span>Review contact submissions</span>
            </div>
            <FiPlus className="quick-action-arrow" />
          </a>
        </div>
      </section>

    </div>
  );
}

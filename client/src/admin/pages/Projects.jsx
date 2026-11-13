
import { useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiStar,
  FiFolder,
  FiCode,
  FiCheckCircle,
  FiFileText,
  FiX,
} from "react-icons/fi";

import {
  initialProjects,
  projectCategories,
} from "../data/projects";

import ProjectForm from "../components/ProjectForm";
import "../styles/projects.css";

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || project.category === category;

      const matchesStatus =
        status === "All" || project.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [projects, search, category, status]);

  const publishedCount = projects.filter(
    (project) => project.status === "Published"
  ).length;

  const draftCount = projects.filter(
    (project) => project.status === "Draft"
  ).length;

  const featuredCount = projects.filter(
    (project) => project.featured
  ).length;

  const openCreateForm = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  const saveProject = (formData) => {
    if (editingProject) {
      setProjects((current) =>
        current.map((project) =>
          project.id === editingProject.id
            ? { ...formData, id: editingProject.id }
            : project
        )
      );
    } else {
      setProjects((current) => [
        { ...formData, id: Date.now() },
        ...current,
      ]);
    }

    closeForm();
  };

  const deleteProject = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmed) {
      setProjects((current) =>
        current.filter((project) => project.id !== id)
      );
    }
  };

  const toggleFeatured = (id) => {
    setProjects((current) =>
      current.map((project) =>
        project.id === id
          ? { ...project, featured: !project.featured }
          : project
      )
    );
  };

  return (
    <div className="projects-page">
      {/* Page heading */}
      <div className="projects-heading">
        <div>
          <span className="admin-eyebrow">PORTFOLIO CONTENT</span>
          <h1>Projects</h1>
          <p>Manage and showcase the work in your portfolio.</p>
        </div>

        <button className="projects-add-btn" onClick={openCreateForm}>
          <FiPlus />
          <span>Add project</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="projects-stats">
        <div className="project-stat-card">
          <div className="project-stat-icon purple">
            <FiFolder />
          </div>
          <div>
            <span>Total projects</span>
            <strong>{projects.length.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon green">
            <FiCheckCircle />
          </div>
          <div>
            <span>Published</span>
            <strong>{publishedCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon orange">
            <FiFileText />
          </div>
          <div>
            <span>Drafts</span>
            <strong>{draftCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon blue">
            <FiStar />
          </div>
          <div>
            <span>Featured</span>
            <strong>{featuredCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>
      </div>

      {/* Project collection */}
      <section className="projects-collection">
        <div className="projects-toolbar">
          <div className="projects-toolbar-title">
            <h2>All projects</h2>
            <span>{filteredProjects.length} items</span>
          </div>

          <div className="projects-filters">
            <div className="projects-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  <FiX />
                </button>
              )}
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              {projectCategories.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All categories" : item}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="All">All statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-image-placeholder">
                      <FiCode />
                      <span>Project preview</span>
                    </div>
                  )}

                  <div className="project-image-top">
                    <span
                      className={`project-status ${
                        project.status === "Published"
                          ? "is-published"
                          : "is-draft"
                      }`}
                    >
                      <span />
                      {project.status}
                    </span>

                    <button
                      className={`project-feature-btn ${
                        project.featured ? "is-featured" : ""
                      }`}
                      onClick={() => toggleFeatured(project.id)}
                      title={
                        project.featured
                          ? "Remove from featured"
                          : "Mark as featured"
                      }
                      aria-label="Toggle featured project"
                    >
                      <FiStar />
                    </button>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-card-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-card-description">
                    {project.description || "No project description added yet."}
                  </p>

                  <div className="project-card-tech">
                    {(project.technologies || []).slice(0, 3).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                    {(project.technologies || []).length > 3 && (
                      <span className="project-tech-more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="project-card-footer">
                    <div className="project-card-date">
                      {project.createdAt || "Date not set"}
                    </div>

                    <div className="project-card-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View live project"
                          aria-label={`View ${project.title}`}
                        >
                          <FiExternalLink />
                        </a>
                      )}

                      <button
                        onClick={() => openEditForm(project)}
                        title="Edit project"
                        aria-label={`Edit ${project.title}`}
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        className="delete-action"
                        onClick={() => deleteProject(project.id)}
                        title="Delete project"
                        aria-label={`Delete ${project.title}`}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <div className="projects-empty-icon">
              <FiFolder />
            </div>
            <h3>No projects found</h3>
            <p>
              Try changing your search or filters, or add a new project.
            </p>
            <button onClick={openCreateForm}>
              <FiPlus />
              Add your first project
            </button>
          </div>
        )}
      </section>

      {/* Project form modal */}
      {showForm && (
        <div className="projects-modal-overlay" onMouseDown={closeForm}>
          <div
            className="projects-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="projects-modal-heading">
              <div>
                <span className="admin-eyebrow">PORTFOLIO CONTENT</span>
                <h2>{editingProject ? "Edit project" : "Add a project"}</h2>
                <p>
                  {editingProject
                    ? "Update the details of this project."
                    : "Add a new project to your portfolio."}
                </p>
              </div>

              <button
                className="projects-modal-close"
                onClick={closeForm}
                aria-label="Close form"
              >
                <FiX />
              </button>
            </div>

            <ProjectForm
              initialData={editingProject}
              onSave={saveProject}
              onCancel={closeForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}

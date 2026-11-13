
import { useEffect, useState } from "react";
import { FiImage, FiX } from "react-icons/fi";

const emptyForm = {
  title: "",
  slug: "",
  category: "Web Development",
  description: "",
  technologies: [],
  image: "",
  liveUrl: "",
  githubUrl: "",
  featured: false,
  status: "Draft",
  createdAt: new Date().toISOString().slice(0, 10),
};

export default function ProjectForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [techInput, setTechInput] = useState("");

  useEffect(() => {
    setForm(initialData || {
      ...emptyForm,
      createdAt: new Date().toISOString().slice(0, 10),
    });
  }, [initialData]);

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "title" && !initialData
        ? {
            slug: value
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, ""),
          }
        : {}),
    }));
  };

  const addTechnology = (e) => {
    e.preventDefault();

    const tech = techInput.trim();

    if (!tech || form.technologies.includes(tech)) return;

    setForm((current) => ({
      ...current,
      technologies: [...current.technologies, tech],
    }));

    setTechInput("");
  };

  const removeTechnology = (tech) => {
    setForm((current) => ({
      ...current,
      technologies: current.technologies.filter((item) => item !== tech),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) return;

    onSave(form);
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>

      <div className="form-field">
        <label>Project Name *</label>
        <input
          name="title"
          value={form.title}
          onChange={updateField}
          placeholder="e.g. Gennova Technologies"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Project Slug</label>
          <input
            name="slug"
            value={form.slug}
            onChange={updateField}
            placeholder="project-name"
          />
        </div>

        <div className="form-field">
          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={updateField}
          >
            <option>Web Development</option>
            <option>Mobile Applications</option>
            <option>AI & Automation</option>
            <option>UI/UX Design</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label>Description *</label>
        <textarea
          name="description"
          value={form.description}
          onChange={updateField}
          placeholder="Describe the project..."
          rows="4"
          required
        />
      </div>

      <div className="form-field">
        <label>Technologies</label>

        <div className="technology-input">
          <input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Enter a technology e.g. React"
          />

          <button type="button" onClick={addTechnology}>
            Add
          </button>
        </div>

        <div className="technology-tags">
          {form.technologies.map((tech) => (
            <span key={tech}>
              {tech}
              <button
                type="button"
                onClick={() => removeTechnology(tech)}
                aria-label={`Remove ${tech}`}
              >
                <FiX />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="form-field">
        <label>Project Image URL</label>
        <div className="image-url-input">
          <FiImage />
          <input
            name="image"
            value={form.image}
            onChange={updateField}
            placeholder="/projects/project-image.png"
          />
        </div>

        {form.image && (
          <div className="project-image-preview">
            <img
              src={form.image}
              alt="Project preview"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Live Project URL</label>
          <input
            name="liveUrl"
            value={form.liveUrl}
            onChange={updateField}
            placeholder="https://example.com"
          />
        </div>

        <div className="form-field">
          <label>GitHub URL</label>
          <input
            name="githubUrl"
            value={form.githubUrl}
            onChange={updateField}
            placeholder="https://github.com/..."
          />
        </div>
      </div>

      <div className="form-row form-options">
        <label className="checkbox-field">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={updateField}
          />
          Featured project
        </label>

        <div className="form-field">
          <label>Publication Status</label>
          <select
            name="status"
            value={form.status}
            onChange={updateField}
          >
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>
      </div>

      <div className="project-form-actions">
        <button type="button" onClick={onCancel} className="cancel-form-btn">
          Cancel
        </button>

        <button type="submit" className="save-project-btn">
          {initialData ? "Save Changes" : "Create Project"}
        </button>
      </div>

    </form>
  );
}

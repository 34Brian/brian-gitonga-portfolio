
import { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export default function BlogForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "Technology",
    coverImage: "",
    tags: [],
    content: "",
    status: "Draft",
    featured: false,
    createdAt: new Date().toISOString().slice(0, 10),
  });

  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        tags: initialData.tags || [],
      });
    }
  }, [initialData]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleTitleChange = (value) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug: initialData
        ? current.slug
        : value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, ""),
    }));
  };

  const addTag = () => {
    const tag = tagInput.trim();

    if (tag && !form.tags.includes(tag)) {
      updateField("tags", [...form.tags, tag]);
    }

    setTagInput("");
  };

  const removeTag = (tagToRemove) => {
    updateField(
      "tags",
      form.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...form,
      title: form.title.trim(),
      slug: form.slug.trim(),
    });
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <div className="blog-form-section">
        <div className="blog-form-section-heading">
          <h3>Article information</h3>
          <p>Start with the main details of your article.</p>
        </div>

        <label>
          Article title *
          <input
            required
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter article title"
          />
        </label>

        <label>
          URL slug *
          <input
            required
            value={form.slug}
            onChange={(e) => updateField("slug", e.target.value)}
            placeholder="article-url-slug"
          />
        </label>

        <label>
          Short excerpt *
          <textarea
            required
            rows="3"
            maxLength="250"
            value={form.excerpt}
            onChange={(e) => updateField("excerpt", e.target.value)}
            placeholder="Write a short introduction for your article..."
          />
          <small>{form.excerpt.length}/250 characters</small>
        </label>

        <div className="blog-form-two-columns">
          <label>
            Category
            <select
              value={form.category}
              onChange={(e) => updateField("category", e.target.value)}
            >
              {[
                "Technology",
                "AI & Automation",
                "Web Development",
                "Software Engineering",
                "Freelancing",
                "Business",
                "Personal",
                "Other",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Publication status
            <select
              value={form.status}
              onChange={(e) => updateField("status", e.target.value)}
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </label>
        </div>
      </div>

      <div className="blog-form-section">
        <div className="blog-form-section-heading">
          <h3>Cover image</h3>
          <p>Add an image URL to use as the article thumbnail.</p>
        </div>

        <label>
          Image URL
          <input
            type="url"
            value={form.coverImage}
            onChange={(e) => updateField("coverImage", e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </label>

        {form.coverImage && (
          <div className="blog-form-image-preview">
            <img
              src={form.coverImage}
              alt="Article cover preview"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
      </div>

      <div className="blog-form-section">
        <div className="blog-form-section-heading">
          <h3>Tags</h3>
          <p>Add keywords that describe your article.</p>
        </div>

        <div className="blog-tag-input">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
            placeholder="Type a tag and press Enter"
          />
          <button type="button" onClick={addTag}>
            <FiPlus />
            Add
          </button>
        </div>

        <div className="blog-selected-tags">
          {form.tags.map((tag) => (
            <span key={tag}>
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag}`}
              >
                <FiX />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="blog-form-section">
        <div className="blog-form-section-heading">
          <h3>Article content</h3>
          <p>Write the full article that will appear on your blog.</p>
        </div>

        <label>
  Article content *
  <ArticleEditor
    value={form.content}
    onChange={(value) => updateField("content", value)}
  />
</label>
      </div>

      <div className="blog-form-options">
        <label className="blog-featured-option">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => updateField("featured", e.target.checked)}
          />
          Feature this article on my portfolio
        </label>
      </div>

      <div className="blog-form-actions">
        <button type="button" className="blog-cancel-btn" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="blog-save-btn">
          {initialData ? "Save changes" : "Create article"}
        </button>
      </div>
    </form>
  );
}


import { useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiStar,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiX,
} from "react-icons/fi";

import { initialArticles } from "../data/blog";
import BlogForm from "../components/BlogForm";
import "../styles/blog.css";

export default function AdminBlog() {
  const [articles, setArticles] = useState(initialArticles);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || article.category === category;

      const matchesStatus =
        status === "All" || article.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [articles, search, category, status]);

  const publishedCount = articles.filter(
    (article) => article.status === "Published"
  ).length;

  const draftCount = articles.filter(
    (article) => article.status === "Draft"
  ).length;

  const featuredCount = articles.filter(
    (article) => article.featured
  ).length;

  const openCreateForm = () => {
    setEditingArticle(null);
    setShowForm(true);
  };

  const openEditForm = (article) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingArticle(null);
  };

  const saveArticle = (formData) => {
    if (editingArticle) {
      setArticles((current) =>
        current.map((article) =>
          article.id === editingArticle.id
            ? { ...formData, id: editingArticle.id }
            : article
        )
      );
    } else {
      setArticles((current) => [
        { ...formData, id: Date.now() },
        ...current,
      ]);
    }

    closeForm();
  };

  const deleteArticle = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      setArticles((current) =>
        current.filter((article) => article.id !== id)
      );
    }
  };

  const toggleFeatured = (id) => {
    setArticles((current) =>
      current.map((article) =>
        article.id === id
          ? { ...article, featured: !article.featured }
          : article
      )
    );
  };

  const categories = [
    "All",
    ...new Set(articles.map((article) => article.category)),
  ];

  return (
    <div className="blog-page">
      <div className="blog-page-heading">
        <div>
          <span className="admin-eyebrow">PORTFOLIO CONTENT</span>
          <h1>Blog & Articles</h1>
          <p>Create, edit and manage your published articles.</p>
        </div>

        <button className="blog-add-btn" onClick={openCreateForm}>
          <FiPlus />
          Add article
        </button>
      </div>

      {/* Statistics */}
      <div className="blog-stats">
        <div className="blog-stat-card">
          <div className="blog-stat-icon purple">
            <FiFileText />
          </div>
          <div>
            <span>Total articles</span>
            <strong>{articles.length.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="blog-stat-card">
          <div className="blog-stat-icon green">
            <FiCheckCircle />
          </div>
          <div>
            <span>Published</span>
            <strong>{publishedCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="blog-stat-card">
          <div className="blog-stat-icon orange">
            <FiClock />
          </div>
          <div>
            <span>Drafts</span>
            <strong>{draftCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="blog-stat-card">
          <div className="blog-stat-icon blue">
            <FiStar />
          </div>
          <div>
            <span>Featured</span>
            <strong>{featuredCount.toString().padStart(2, "0")}</strong>
          </div>
        </div>
      </div>

      {/* Articles collection */}
      <section className="blog-collection">
        <div className="blog-toolbar">
          <div className="blog-toolbar-title">
            <h2>All articles</h2>
            <span>{filteredArticles.length} items</span>
          </div>

          <div className="blog-filters">
            <div className="blog-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search articles..."
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
              {categories.map((item) => (
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

        {filteredArticles.length > 0 ? (
          <div className="blog-articles-list">
            {filteredArticles.map((article) => (
              <article className="blog-article-row" key={article.id}>
                <div className="blog-article-cover">
                  {article.coverImage ? (
                    <img src={article.coverImage} alt={article.title} />
                  ) : (
                    <div className="blog-cover-placeholder">
                      <FiFileText />
                    </div>
                  )}
                </div>

                <div className="blog-article-info">
                  <div className="blog-article-meta">
                    <span className="blog-article-category">
                      {article.category}
                    </span>

                    <span
                      className={`blog-status ${
                        article.status === "Published"
                          ? "is-published"
                          : "is-draft"
                      }`}
                    >
                      <span />
                      {article.status}
                    </span>

                    {article.featured && (
                      <span className="blog-featured-label">
                        <FiStar /> Featured
                      </span>
                    )}
                  </div>

                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>

                  <div className="blog-article-bottom">
                    <span>{article.createdAt}</span>
                    <span>
                      {(article.tags || []).slice(0, 3).join(" · ")}
                    </span>
                  </div>
                </div>

                <div className="blog-article-actions">
                  <button
                    className={article.featured ? "is-active" : ""}
                    onClick={() => toggleFeatured(article.id)}
                    title={
                      article.featured
                        ? "Remove featured status"
                        : "Feature article"
                    }
                    aria-label="Toggle featured article"
                  >
                    <FiStar />
                  </button>

                  {article.status === "Published" && (
                    <a
                      href={`/blog/${article.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      title="View article"
                      aria-label={`View ${article.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}

                  <button
                    onClick={() => openEditForm(article)}
                    title="Edit article"
                    aria-label={`Edit ${article.title}`}
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    className="blog-delete-action"
                    onClick={() => deleteArticle(article.id)}
                    title="Delete article"
                    aria-label={`Delete ${article.title}`}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <div className="blog-empty-icon">
              <FiFileText />
            </div>
            <h3>No articles found</h3>
            <p>Try a different search or create a new article.</p>
            <button onClick={openCreateForm}>
              <FiPlus /> Create article
            </button>
          </div>
        )}
      </section>

      {/* Article editor */}
      {showForm && (
        <div className="blog-modal-overlay" onMouseDown={closeForm}>
          <div
            className="blog-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="blog-modal-heading">
              <div>
                <span className="admin-eyebrow">CONTENT EDITOR</span>
                <h2>{editingArticle ? "Edit article" : "Create article"}</h2>
                <p>
                  {editingArticle
                    ? "Update your article details and content."
                    : "Write and prepare a new portfolio article."}
                </p>
              </div>

              <button
                className="blog-modal-close"
                onClick={closeForm}
                aria-label="Close editor"
              >
                <FiX />
              </button>
            </div>

            <BlogForm
              initialData={editingArticle}
              onSave={saveArticle}
              onCancel={closeForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}

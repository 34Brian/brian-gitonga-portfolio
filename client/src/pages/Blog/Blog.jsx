import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import "./blog.css";

const categories = [
  "ALL",
  "DEVELOPMENT",
  "AI & TECHNOLOGY",
  "CAREER & FREELANCING",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const featuredPost = blogPosts.find((post) => post.featured);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const isNotFeatured = !post.featured;
      const matchesCategory =
        activeCategory === "ALL" || post.category === activeCategory;

      return isNotFeatured && matchesCategory;
    });
  }, [activeCategory]);

  return (
    <div className="blog-page">
      {/* HERO */}

      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="blog-featured-section">
          <div className="blog-section-heading">
            <span>01 / FEATURED ARTICLE</span>
            <span>EDITOR'S PICK</span>
          </div>

          <Link
            to={`/blog/${featuredPost.slug}`}
            className="blog-featured-card"
          >
            <div className="blog-featured-image">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="blog-image-label">FEATURED ARTICLE</span>
            </div>

            <div className="blog-featured-content">
              <span className="blog-category">{featuredPost.category}</span>

              <h2>{featuredPost.title}</h2>

              <p>{featuredPost.excerpt}</p>

              <div className="blog-post-meta">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <span className="blog-read-link">
                READ ARTICLE <span>↗</span>
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ALL ARTICLES */}
      <section className="blog-articles-section">
        <div className="blog-section-heading">
          <span>02 / THE JOURNAL</span>
          <span>EXPLORE ARTICLES</span>
        </div>

        <div className="blog-filter-bar">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <span className="blog-results-count">
            {String(filteredPosts.length).padStart(2, "0")} ARTICLES
          </span>
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <Link
              to={`/blog/${post.slug}`}
              className="blog-card"
              key={post.id}
            >
              <div className="blog-card-image">
                <img
                  src={post.image}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="blog-card-number">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <span className="blog-card-arrow">↗</span>
              </div>

              <div className="blog-card-content">
                <div className="blog-card-topline">
                  <span className="blog-category">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <div className="blog-card-footer">
                  <span>{post.date}</span>
                  <span>READ ARTICLE ↗</span>
                </div>
              </div>
            </Link>
          ))}

          {filteredPosts.length === 0 && (
            <p className="blog-empty">No articles in this category yet.</p>
          )}
        </div>
      </section>

    </div>
  );
}
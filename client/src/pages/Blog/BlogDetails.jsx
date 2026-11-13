import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import "./blog.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    return (
      <section className="blog-not-found">
        <span>404 / ARTICLE NOT FOUND</span>
        <h1>THIS PAGE DOESN'T EXIST.</h1>
        <Link to="/blog">← BACK TO THE JOURNAL</Link>
      </section>
    );
  }

  return (
    <article className="blog-detail-page">
      <div className="blog-detail-top">
        <Link to="/blog">← BACK TO JOURNAL</Link>
        <span>BG / JOURNAL</span>
      </div>

      <header className="blog-detail-header">
        <span className="blog-category">{post.category}</span>
        <h1>{post.title}<span className="orange-dot">.</span></h1>
        <p>{post.excerpt}</p>

        <div className="blog-detail-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
          <span>BY BRIAN GITONGA</span>
        </div>
      </header>

      <div className="blog-detail-image">
        <img
          src={post.image}
          alt={post.title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="blog-detail-layout">
        <aside className="blog-detail-sidebar">
          <span>SHARE AN IDEA</span>
          <span>BG — JOURNAL</span>
        </aside>

        <div className="blog-detail-body">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="blog-detail-end">
            <span>END OF ARTICLE</span>
            <span>THANKS FOR READING.</span>
          </div>

          <Link to="/blog" className="blog-back-link">
            ← EXPLORE MORE ARTICLES
          </Link>
        </div>
      </div>
    </article>
  );
}

import { Link } from "react-router-dom";
import "./featured-blog.css";

const featuredArticles = [
  {
    id: 1,
    slug: "building-software-in-the-age-of-ai",
    category: "TECHNOLOGY",
    date: "COMING SOON",
    readTime: "6 MIN READ",
    title: "Building software in the age of AI",
    excerpt:
      "AI is changing how we build software, but understanding the fundamentals still matters. Here's how I see the future of development.",
    image: "/images/blog/ai-development.jpg",
  },
  {
    id: 2,
    slug: "why-i-build-with-react-and-nextjs",
    category: "DEVELOPMENT",
    date: "COMING SOON",
    readTime: "5 MIN READ",
    title: "Why I enjoy building with React and Next.js",
    excerpt:
      "A look at the tools, decisions and development approaches I use when creating modern web applications.",
    image: "/images/blog/react-nextjs.jpg",
  },
  {
    id: 3,
    slug: "building-a-tech-career-from-kenya",
    category: "PERSONAL JOURNEY",
    date: "COMING SOON",
    readTime: "4 MIN READ",
    title: "Building a tech career from Kenya",
    excerpt:
      "Working in technology has opened opportunities beyond geographical boundaries. Here are some lessons from the journey.",
    image: "/images/blog/kenya-tech.jpg",
  },
];

function FeaturedBlogCard({ article }) {
  return (
    <article className="featured-blog-card">
      <Link
        to={`/blog/${article.slug}`}
        className="featured-blog-image"
        aria-label={`Read ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.title}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="featured-blog-image-arrow">↗</span>
      </Link>

      <div className="featured-blog-content">
        <div className="featured-blog-meta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>

        <h3>
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p>{article.excerpt}</p>

        <div className="featured-blog-bottom">
          <span>{article.date}</span>

          <Link to={`/blog/${article.slug}`}>
            READ ARTICLE <span>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedBlog() {
  return (
    <section className="featured-blog-section" id="featured-blog">
      <div className="featured-blog-container">

        <div className="featured-blog-topline">
          <span>06 — IDEAS & PERSPECTIVES </span>
        </div>

        <div className="featured-blog-heading">
          <div>
            <h2>
              THOUGHTS &
              <br />
              <span>IDEAS.</span>
            </h2>
          </div>

          <div className="featured-blog-intro">
            <p>
              Beyond writing code, I enjoy exploring ideas, sharing
              experiences and discussing how technology is shaping
              the way we build, work and do business.
            </p>

            <Link to="/blog" className="featured-blog-all-link">
              VIEW ALL ARTICLES <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="featured-blog-grid">
          {featuredArticles.map((article) => (
            <FeaturedBlogCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

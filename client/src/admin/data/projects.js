
export const initialProjects = [
  {
    id: 1,
    title: "Gennova Technologies",
    slug: "gennova-technologies",
    category: "Web Development",
    description:
      "A modern technology agency website focused on AI solutions, software development and digital transformation.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "/projects/gennova.png",
    liveUrl: "https://gennova.com",
    githubUrl: "",
    featured: true,
    status: "Published",
    createdAt: "2026-11-08",
  },
  {
    id: 2,
    title: "Letaipa Foundation",
    slug: "letaipa-foundation",
    category: "Web Development",
    description:
      "A responsive foundation website with content management and an administrative blog system.",
    technologies: ["Next.js", "Supabase", "CSS"],
    image: "/projects/letaipa.png",
    liveUrl: "https://letaipa-foundation.vercel.app",
    githubUrl: "",
    featured: true,
    status: "Published",
    createdAt: "2026-11-05",
  },
  {
    id: 3,
    title: "AI Automation Platform",
    slug: "ai-automation-platform",
    category: "AI & Automation",
    description:
      "An intelligent automation solution designed to streamline business workflows.",
    technologies: ["Python", "OpenAI", "Node.js"],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    status: "Draft",
    createdAt: "2026-11-03",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Applications",
  "AI & Automation",
  "Custom software",
  "Other",
];

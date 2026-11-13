
import { Routes, Route } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";
import Contact from "../pages/Contact/Contact";

// Admin
import AdminLayout from "../admin/components/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import AdminProjects from "../admin/pages/Projects";
import AdminBlog from "../admin/pages/Blog";
import Profile from "../admin/pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public website */}
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        
      </Route>

      {/* Admin dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

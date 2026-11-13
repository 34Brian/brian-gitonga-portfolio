import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Projects from "../../sections/Projects/Projects";
import FeaturedBlog from "../../sections/FeaturedBlog/FeaturedBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <FeaturedBlog />
    
    </>
  );
}
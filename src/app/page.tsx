import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import References from "@/components/References";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <References />
      <Footer />
    </main>
  );
}

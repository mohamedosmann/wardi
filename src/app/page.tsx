import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import References from "@/components/References";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Expertise />
      <Education />
      <Process />
      <FAQ />
      <References />
      <Footer />
    </main>
  );
}

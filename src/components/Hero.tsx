"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section 
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 60px",
        textAlign: "center",
        backgroundColor: "var(--bg-primary)",
        overflow: "hidden"
      }}
    >
      {/* Background Glow */}
      <div className="hero-glow" />

      <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="badge">
           Available for new projects
        </div>

        <h1 style={{ maxWidth: "900px" }}>
          Build with <span style={{ color: "#fff" }}>Mohamed Osman</span>.<br />
          Experience the Future.
        </h1>

        <p style={{ maxWidth: "650px", color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: "1.6" }}>
          Passionate software developer and ML specialist creating AI-driven solutions 
          to solve real-world challenges in health, education, and sustainability.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#about" className="btn-filled">About Me</a>
          <a href="#projects" className="btn-outline">View Projects</a>
        </div>
      </div>
    </section>
  );
};


export default Hero;



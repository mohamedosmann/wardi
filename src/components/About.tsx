"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" style={{ padding: "160px 5%", background: "#FFFFFF", color: "#000000" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "start" }}>
        <div>
          <div className="badge" style={{ background: "rgba(0, 0, 0, 0.05)", borderColor: "rgba(0, 0, 0, 0.1)", color: "#555555", marginBottom: "2rem" }}>
            ABOUT ME
          </div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "2rem", color: "#15242E" }}>
            Built On<br />
            Innovation,<br />
            Driven By<br />
            Precision
          </h2>
          <a href="#contact" className="btn-gold" style={{ marginTop: "1rem" }}>
            Get a free quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>

        <div style={{ paddingTop: "2rem" }}>
          <p style={{ fontSize: "1.4rem", fontWeight: "600", color: "#15242E", marginBottom: "2.5rem", lineHeight: "1.4" }}>
            We are a client-focused development studio dedicated to scaling your vision and delivering clear, results-driven software solutions.
          </p>
          <div style={{ color: "#555555", fontSize: "1.1rem", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p>
              I am a passionate and self-driven professional with deep expertise in 
              <strong> software development</strong>, <strong> machine learning</strong>, and 
              <strong> AI-driven solutions</strong>.
            </p>
            <p>
              With experience across a wide range of technical challenges, we combine strategic thinking with precise execution to guide clients through complex situations with confidence. Our approach is grounded in professionalism, discretion, and a deep commitment to achieving the best possible outcomes—because your project deserves more than code, it deserves craftsmanship.
            </p>
            <p>
              My work focuses on integrating modern APIs like Google Gemini to solve real-world challenges. 
              I conduct impactful research in health, education, and sustainability through technology. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

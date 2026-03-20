"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" style={{ padding: "120px 24px", background: "linear-gradient(to bottom, #050505, #0a0a0a)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}>
        <div style={{ position: "relative", justifySelf: "center" }}>
          <div 
            className="mockup-container"
            style={{ 
              maxWidth: "400px", 
              borderRadius: "2rem", 
              overflow: "hidden",
              margin: 0,
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.05)"
            }}
          >
            <div className="mockup-image" style={{ borderRadius: "2rem" }}>
              <Image 
                src="/images/profile.jpg" 
                alt="Mohamed Osman" 
                width={400} 
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          {/* Decorative accents */}
          <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "60px", height: "60px", borderTop: "2px solid #fff", borderLeft: "2px solid #fff", opacity: 0.2 }} />
          <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "60px", height: "60px", borderBottom: "2px solid #fff", borderRight: "2px solid #fff", opacity: 0.2 }} />
        </div>

        <div>
          <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem", letterSpacing: "-0.04em" }}>
            Meet <span style={{ opacity: 0.5 }}>Mohamed Osman</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            I am a passionate and self-driven professional with deep expertise in 
            <span style={{ color: "#fff" }}> software development</span>, 
            <span style={{ color: "#fff" }}> machine learning</span>, and 
            <span style={{ color: "#fff" }}> AI-driven solutions</span>.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "1.5rem", lineHeight: "1.7" }}>
            My work focuses on integrating modern APIs like Google Gemini to solve real-world challenges. 
            I conduct impactful research in health, education, and sustainability through technology. 
            I am highly adaptable, collaborative, and eager to contribute to forward-thinking global projects.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div>
              <p style={{ fontWeight: "700", color: "#fff", marginBottom: "0.5rem" }}>Based in</p>
              <p style={{ color: "var(--text-secondary)" }}>Mogadishu, Somalia</p>
            </div>
            <div>
              <p style={{ fontWeight: "700", color: "#fff", marginBottom: "0.5rem" }}>Specialization</p>
              <p style={{ color: "var(--text-secondary)" }}>Software & ML Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

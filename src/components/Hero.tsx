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
        justifyContent: "space-between",
        padding: "160px 5% 0",
        backgroundColor: "var(--bg-primary)",
        color: "#fff",
        overflow: "hidden"
      }}
    >
      {/* Background Decorative Element (Scales) */}
      <div style={{ 
        position: "absolute", 
        right: "5%", 
        top: "40%", 
        transform: "translateY(-50%)", 
        opacity: 0.05, 
        pointerEvents: "none",
        zIndex: 0
      }}>
        <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>

      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 1, paddingBottom: "100px" }}>
        <div>
          <div className="badge" style={{ background: "rgba(200, 164, 80, 0.1)", borderColor: "var(--accent-gold)", color: "var(--accent-gold)" }}>
             AVAILABLE FOR NEW PROJECTS
          </div>
          
          <h1 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: "1.1", marginBottom: "1.5rem" }}>
            Experience<br />
            <span className="gold-text">the Future.</span>
          </h1>
          <p style={{ fontSize: "1.4rem", fontWeight: "600", color: "#fff", marginBottom: "1.5rem" }}>
            Build with Mohamed Osman.
          </p>

          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "550px", lineHeight: "1.6" }}>
            Passionate software developer and ML specialist creating AI-driven solutions to solve real-world challenges in health, education, and sustainability.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#projects" className="btn-gold" style={{ fontSize: "1rem", padding: "16px 40px" }}>
              View Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a href="#about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "1rem" }}>
              About Me
              <span>→</span>
            </a>
          </div>

          {/* Social Proof Placeholder */}
          <div style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem 2rem", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", maxWidth: "400px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
               <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4285F4", fontWeight: "bold", fontSize: "0.8rem" }}>G</div>
               <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem" }}>f</div>
            </div>
            <div>
               <div style={{ display: "flex", color: "#FFD700", gap: "2px", marginBottom: "2px" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i} style={{ fontSize: "0.8rem" }}>{s}</span>)}
                  <span style={{ color: "#fff", marginLeft: "8px", fontWeight: "bold", fontSize: "0.8rem" }}>4.9</span>
               </div>
               <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>2k+ Reviews</div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", height: "700px", width: "100%" }}>
           <Image 
             src="/images/profile.jpg" 
             alt="Mohamed" 
             fill 
             style={{ objectFit: "cover", objectPosition: "top", borderRadius: "30px" }}
             priority
           />
           <div style={{ 
             position: "absolute", 
             bottom: 0, 
             left: 0, 
             right: 0, 
             height: "40%", 
             background: "linear-gradient(transparent, var(--bg-primary))" 
           }} />
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ 
        width: "100%",
        background: "rgba(255, 255, 255, 0.02)", 
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "3rem 0",
        marginTop: "auto"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", padding: "0 5%" }}>
          {[
            { label: "Years of Experience", value: "5+" },
            { label: "Success rate", value: "95%" },
            { label: "Projects completed", value: "250+" },
            { label: "Available Worldwide", value: "100%" }
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", fontFamily: "var(--font-heading)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "100px", lineHeight: "1.2" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;



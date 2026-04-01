"use client";

const Expertise = () => {
  const skills = [
    {
      category: "Development",
      items: ["Software Development", "Web Development", "Mobile App Development", "Full-stack Design"]
    },
    {
      category: "AI & Data",
      items: ["Machine Learning & AI", "Google Gemini API", "Computer Vision", "Applied Research"]
    },
    {
      category: "Web3 & Tools",
      items: ["Blockchain & Smart Contracts", "Solidity", "Odoo & QuickBooks Integration", "Git & CI/CD"]
    },
    {
      category: "Languages",
      items: ["SOMALI (Native)", "ENGLISH (C2 Proficient)", "ARABIC (B2/C1 Independent)"]
    }
  ];

  return (
    <section id="expertise" style={{ padding: "160px 5%", backgroundColor: "#FFFFFF", color: "#000" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "6rem" }}>
          <div>
            <div className="badge" style={{ background: "rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.1)", color: "#15242E", marginBottom: "1.5rem" }}>EXPERTISE</div>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#15242E" }}>
              Technical<br />
              <span style={{ color: "var(--accent-gold)" }}>Capabilities</span>
            </h2>
          </div>
          <p style={{ maxWidth: "400px", color: "#555555", fontSize: "1.1rem" }}>
            A comprehensive stack of modern technologies and methodologies to build future-ready solutions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ 
              padding: "3.5rem", 
              border: "1px solid rgba(0,0,0,0.08)", 
              borderRadius: "30px",
              background: "rgba(0,0,0,0.01)"
            }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: "700", color: "var(--accent-gold)", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{skill.category}</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {skill.items.map((item, i) => (
                  <li key={i} style={{ fontSize: "1.2rem", fontWeight: "600", color: "#15242E" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

"use client";

const Skills = () => {
  const skillCategories = [
    {
      name: "Development",
      skills: ["Software Development", "Web Development", "Mobile App Development", "Full-stack Design"]
    },
    {
      name: "AI & Data",
      skills: ["Machine Learning & AI", "Google Gemini API", "Computer Vision", "Applied Research"]
    },
    {
      name: "Web3 & Tools",
      skills: ["Blockchain & Smart Contracts", "Solidity", "Odoo & QuickBooks Integration", "Git & CI/CD"]
    }
  ];

  const languages = [
    { name: "SOMALI", level: "Mother tongue", progress: 100 },
    { name: "ENGLISH", level: "C2 (Proficient)", progress: 95 },
    { name: "ARABIC", level: "B2/C1 (Independent)", progress: 75 }
  ];

  return (
    <section id="skills" style={{ padding: "140px 24px", background: "#050505" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6rem" }}>
          <div>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "3rem", letterSpacing: "-0.04em" }}>
              Technical <span style={{ opacity: 0.5 }}>Expertise</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {skillCategories.map((cat, index) => (
                <div key={index}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: "700", color: "rgba(255,255,255,0.4)", marginBottom: "1.2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {cat.name}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "3rem", letterSpacing: "-0.04em" }}>
              Languages
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {languages.map((lang, index) => (
                <div key={index}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                    <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>{lang.name}</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{lang.level}</span>
                  </div>
                  <div style={{ height: "4px", width: "100%", background: "rgba(255, 255, 255, 0.05)", borderRadius: "2px", overflow: "hidden" }}>
                    <div 
                      className="progress-bar"
                      style={{ 
                        height: "100%", 
                        width: `${lang.progress}%`, 
                        background: "#fff",
                        opacity: 0.8
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-chip {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .skill-chip:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
          color: var(--accent-cyan);
        }
        .progress-bar {
          transition: width 1s ease-out;
        }
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

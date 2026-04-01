"use client";

const Projects = () => {
  const projects = [
    {
      title: "Food Recognition Using ML & Gemini API",
      description: "Machine learning-based application for recognizing food items from images, integrated with Google Gemini API for accurate analysis and nutritionist suggestions.",
      tags: ["Python", "ML", "Google Gemini"],
      link: "https://github.com/mohamedosmann/Food-recognition-for-dietry-tracking",
    },
    {
      title: "Champions League Simulation 2024/25",
      description: "Football tournament simulation system modeling the UEFA Champions League season, with match algorithms, standings, and player stats.",
      tags: ["JavaScript", "Algorithms", "UI/UX"],
      link: "https://github.com/mohamedosmann/UEFA-Champions-League-2024-25-Simulation",
    },
    {
      title: "Waste Disposal Management App",
      description: "Cross-platform Flutter app to streamline waste collection, disposal, and reporting, featuring live tracking and digital payment options.",
      tags: ["Flutter", "Dart", "Firebase"],
      link: "#",
    },
    {
      title: "AI Quiz-Based Learning App",
      description: "Adaptive quiz application leveraging basic AI logic to customize questions based on learner performance, improving student retention.",
      tags: ["Flutter", "Dart", "EduTech"],
      link: "#",
    },
    {
      title: "Idea Keeper",
      description: "Python-based application to help users capture, organize, and manage their ideas with tagging and search functionality.",
      tags: ["Python", "Database", "Productivity"],
      link: "#",
    },
    {
      title: "Smart NFT Contract",
      description: "Ethereum-based smart contracts for dynamic, evolving NFTs based on user interactions, gamifying the digital collectible experience.",
      tags: ["Solidity", "Blockchain", "Web3"],
      link: "#",
    },
  ];

  return (
    <section id="projects" style={{ padding: "160px 5%", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "5rem" }}>
          <div>
            <div className="badge" style={{ marginBottom: "1.5rem" }}>MY PROJECTS</div>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#fff" }}>
              Trusted<br />
              <span className="gold-text">Expertise</span>
            </h2>
          </div>
          <p style={{ maxWidth: "400px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
             I deliver trusted software and ML services with proven experience and a results-driven focus.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "2.5rem" }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              background: "rgba(255, 255, 255, 0.03)", 
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "30px",
              padding: "3rem",
              transition: "all 0.4s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}>
              <div 
                style={{ 
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>

              <div className="badge" style={{ fontSize: "0.7rem", marginBottom: "1.5rem", background: "rgba(255, 255, 255, 0.05)" }}>
                {project.tags[0]}
              </div>
              
              <h3 style={{ fontSize: "2rem", color: "#fff", marginBottom: "1.5rem" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                {project.description}
              </p>
              
              <div style={{ display: "flex", gap: "0.8rem" }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: "0.8rem", color: "#fff", opacity: 0.6 }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

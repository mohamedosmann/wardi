"use client";

const Projects = () => {
  const projects = [
    {
      title: "Food Recognition Using ML & Gemini API",
      description: "Machine learning-based application for recognizing food items from images, integrated with Google Gemini API for accurate analysis and nutritionist suggestions.",
      tags: ["Python", "ML", "Google Gemini", "Computer Vision"],
      link: "https://github.com/mohamedosmann/Food-recognition-for-dietry-tracking",
      color: "#22d3ee"
    },
    {
      title: "Champions League Simulation 2024/25",
      description: "Football tournament simulation system modeling the UEFA Champions League season, with match algorithms, standings, and player stats.",
      tags: ["JavaScript", "Algorithms", "UI/UX", "Data Simulation"],
      link: "https://github.com/mohamedosmann/UEFA-Champions-League-2024-25-Simulation",
      color: "#6366f1"
    },
    {
      title: "Waste Disposal Management App",
      description: "Cross-platform Flutter app to streamline waste collection, disposal, and reporting, featuring live tracking and digital payment options.",
      tags: ["Flutter", "Dart", "Firebase", "Maps"],
      link: "#",
      color: "#10b981"
    },
    {
      title: "AI Quiz-Based Learning App",
      description: "Adaptive quiz application leveraging basic AI logic to customize questions based on learner performance, improving student retention.",
      tags: ["Flutter", "Dart", "AI Logic", "EduTech"],
      link: "#",
      color: "#f59e0b"
    },
    {
      title: "Idea Keeper",
      description: "Python-based application to help users capture, organize, and manage their ideas with tagging and search functionality.",
      tags: ["Python", "Database", "Productivity"],
      link: "#",
      color: "#ec4899"
    },
    {
      title: "Smart NFT Contract",
      description: "Ethereum-based smart contracts for dynamic, evolving NFTs based on user interactions, gamifying the digital collectible experience.",
      tags: ["Solidity", "Blockchain", "Web3", "Ethereum"],
      link: "#",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="projects" style={{ padding: "140px 24px" }}>
      <div className="container">
        <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "4rem", textAlign: "center", letterSpacing: "-0.04em" }}>
          Selected <span style={{ opacity: 0.5 }}>Projects</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "3rem" }}>
          {projects.map((project, index) => (
            <div key={index} className="glass" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div 
                style={{ 
                  height: "2px", 
                  width: "40px", 
                  background: project.color, 
                  boxShadow: `0 0 15px ${project.color}`
                }} 
              />
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", lineHeight: "1.2" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", flex: "1", lineHeight: "1.6" }}>{project.description}</p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ padding: "6px 14px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "99px", fontSize: "0.75rem", fontWeight: "600", color: project.color, border: `1px solid ${project.color}33` }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#fff", fontWeight: "600", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", marginTop: "1rem" }}
              >
                Explore Repository 
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
        }
        .project-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 400px) {
          .project-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

"use client";

const Experience = () => {
  const experiences = [
    {
      role: "ERP Specialist",
      company: "YOS Chartered Accountants",
      location: "MOGADISHU, SOMALIA",
      period: "07/05/2025 – Current",
      highlights: [
        "Designed and developed two integrated business systems: a Custom ERP (financial/accounting) and a Rehabilitation Management System",
        "Built a client-centered financial system to manage billing, payments, and financial records per individual client",
        "Developed a rehab management platform to handle client tracking and service management",
        "Integrated both systems with established platforms such as Odoo and QuickBooks for advanced reporting and scalability",
        "Automated core processes including billing, financial reporting, and client management, reducing manual workload",
        "Collaborated with stakeholders to gather requirements and deliver tailored, real-world solutions"
      ]
    },
    {
      role: "Software Developer",
      company: "ILSAN TECH",
      location: "MOGADISHU, SOMALIA",
      period: "05/05/2024 – Current",
      highlights: [
        "Contributed to the development and maintenance of the iSchool Learning Management System (LMS) backend",
        "Designed and implemented key features including course upload functionality and enrollment tracking modules",
        "Developed data-driven analytics tools that allowed instructors to monitor student progress more effectively",
        "Successfully supporting over 3,000 active students and enabling a more seamless online learning experience"
      ]
    },
    {
      role: "Web Developer",
      company: "SIMAD OLEARN",
      location: "MOGADISHU, SOMALIA",
      period: "Current",
      highlights: [
        "Designed and developed a custom online exam proctoring system ('Exam Shield') to enhance academic integrity",
        "Built and maintained the platform’s official website, handling 10,000+ monthly visitors",
        "Optimized website performance and user experience to ensure stability under high traffic",
        "Contributed to the development of a scalable Learning Management System (LMS)"
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: "140px 24px", background: "linear-gradient(to bottom, #0a0a0a, #050505)" }}>
      <div className="container">
        <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "4rem", textAlign: "center", letterSpacing: "-0.04em" }}>
          Work <span style={{ opacity: 0.5 }}>Experience</span>
        </h2>
        
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "1px", background: "rgba(255,255,255,0.1)" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ paddingLeft: "4rem", position: "relative" }}>
                <div 
                  style={{ 
                    position: "absolute", 
                    left: "-3px", 
                    top: "10px", 
                    width: "7px", 
                    height: "7px", 
                    borderRadius: "50%", 
                    background: "#fff",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" 
                  }} 
                />
                
                <div 
                  className="glass" 
                  style={{ 
                    padding: "3rem",
                    transition: "all 0.4s ease",
                    border: "1px solid rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                    <div>
                      <h3 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "0.2rem" }}>{exp.role}</h3>
                      <p style={{ color: "var(--text-secondary)", fontWeight: "500" }}>{exp.company} • {exp.location}</p>
                    </div>
                    <div style={{ padding: "6px 20px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "99px", fontSize: "0.85rem", height: "fit-content", color: "var(--text-secondary)" }}>
                      {exp.period}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.8rem", lineHeight: "1.7" }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-indigo);
        }
        @media (max-width: 600px) {
          .card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

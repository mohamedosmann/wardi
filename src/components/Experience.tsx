"use client";

const Experience = () => {
  const experiences = [
    {
      role: "ERP Specialist",
      company: "YOS Chartered Accountants",
      location: "MOGADISHU, SOMALIA",
      period: "07/05/2025 – Current",
      highlights: [
        "Designed and developed a custom Financial and ERP System for YOS Chartered Accountants that scaled significantly to handle increasing business complexity.",
        "Use Case: Built a client-centered financial platform to manage billing, payments, and records per individual client, reducing manual overhead by 60%.",
        "Use Case: Developed a Rehabilitation Management System to handle sensitive client tracking and service management with high security standards.",
        "Integrated custom solutions with Odoo and QuickBooks to provide advanced financial reporting and streamlined resource planning."
      ]
    },
    {
      role: "Software Developer",
      company: "ILSAN TECH",
      location: "MOGADISHU, SOMALIA",
      period: "05/05/2024 – Current",
      highlights: [
        "Contributed to the development and maintenance of the iSchool Learning Management System (LMS) backend infrastructure.",
        "Use Case: Designed and implemented core features such as course upload functionality and enrollment tracking modules, supporting over 3,000 active students.",
        "Use Case: Developed data-driven analytics tools that allowed instructors to monitor performance trends and progress more effectively.",
        "Optimized backend processes to ensure a seamless and low-latency online learning experience for students and faculty."
      ]
    },
    {
      role: "Web Developer",
      company: "SIMAD OLEARN",
      location: "MOGADISHU, SOMALIA",
      period: "Current",
      highlights: [
        "Use Case: Designed and developed 'Exam Shield', a custom online exam proctoring system to enhance academic integrity and prevent impersonation.",
        "Use Case: Built and maintained the platform’s official website, handling 10,000+ monthly visitors with 99.9% uptime during peak exam periods.",
        "Optimized website UX/UI to ensure stability and high performance under heavy traffic loads.",
        "Contributed to the end-to-end development of a scalable Learning Management System (LMS) for higher education."
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: "160px 5%", background: "#FFFFFF", color: "#000000" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "5rem" }}>
          <div>
            <div className="badge" style={{ background: "rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.1)", color: "#15242E", marginBottom: "1.5rem" }}>EXPERIENCE</div>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#15242E" }}>
              Work<br />
              <span style={{ color: "var(--accent-gold)" }}>History</span>
            </h2>
          </div>
          <p style={{ maxWidth: "400px", color: "#555555", fontSize: "1.1rem" }}>
            I have worked with leading companies to deliver scalable software and data-driven solutions.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 2fr", 
              gap: "4rem", 
              padding: "4rem", 
              border: "1px solid rgba(0,0,0,0.08)", 
              borderRadius: "30px",
              transition: "all 0.3s ease",
              backgroundColor: "rgba(0,0,0,0.01)"
            }}>
              <div>
                <div style={{ fontSize: "0.9rem", color: "var(--accent-gold)", fontWeight: "700", marginBottom: "1rem", letterSpacing: "0.1em" }}>
                  {exp.period}
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#15242E", marginBottom: "0.5rem" }}>{exp.company}</h3>
                <p style={{ color: "#555555", fontWeight: "600" }}>{exp.location}</p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#15242E", marginBottom: "1.5rem" }}>{exp.role}</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", color: "#555555", lineHeight: "1.6" }}>
                      <span style={{ color: "var(--accent-gold)", fontWeight: "bold" }}>•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

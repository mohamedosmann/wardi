"use client";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "SIMAD University",
      period: "2020 – 2024",
      location: "Mogadishu, Somalia",
      website: "simad.edu.so"
    },
    {
      degree: "High School Diploma",
      institution: "Al-Imra High School",
      period: "2013 – 2020",
      location: "Mogadishu, Somalia"
    }
  ];

  const awards = [
    {
      title: "Best Mobile App Innovation & Solution",
      event: "Ileys App - Ramadan Coding Challenge (2025)",
      icon: "🏆"
    },
    {
      title: "Best Mobile App Innovation",
      event: "Ramadan Coding Challenge – MTI (2024)",
      icon: "🏆"
    }
  ];

  return (
    <section id="education" style={{ padding: "160px 5%", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
        <div>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>ACADEMIC</div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#fff", marginBottom: "4rem" }}>
            Education &<br />
            <span className="gold-text">Certificates</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {education.map((edu, index) => (
              <div key={index} style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "0.5rem" }}>{edu.degree}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{edu.institution}</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                   <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{edu.period} • {edu.location}</p>
                   {edu.website && <a href={`https://${edu.website}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", fontSize: "0.9rem", textDecoration: "none" }}>{edu.website}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>RECOGNITION</div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#fff", marginBottom: "4rem" }}>
            Awards &<br />
            <span className="gold-text">Honors</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {awards.map((award, index) => (
              <div key={index} style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)", 
                borderRadius: "20px",
                padding: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#fff", marginBottom: "0.5rem" }}>{award.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{award.event}</p>
                </div>
                <div style={{ fontSize: "2rem" }}>{award.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Education;

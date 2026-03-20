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
      event: "Ileys App - Ramadan Coding Challenge",
      date: "2025",
      link: "https://www.facebook.com/share/p/1GKZZwPken/"
    },
    {
      title: "Best Mobile App Innovation",
      event: "Ramadan Coding Challenge – MTI",
      date: "2024",
      link: "https://www.facebook.com/share/p/16ze1r1uG1/"
    }
  ];

  return (
    <section id="education" style={{ padding: "140px 24px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
          <div>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "3rem", letterSpacing: "-0.04em" }}>
              Education
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {education.map((edu, index) => (
                <div key={index} className="glass" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>{edu.degree}</h3>
                  <p style={{ color: "var(--text-secondary)", fontWeight: "500", marginBottom: "0.5rem" }}>{edu.institution}</p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", opacity: 0.6 }}>{edu.period} • {edu.location}</p>
                  {edu.website && (
                    <a href={`https://${edu.website}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#fff", marginTop: "1rem", display: "inline-block" }}>
                      {edu.website}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "3rem", letterSpacing: "-0.04em" }}>
              Awards
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {awards.map((award, index) => (
                <div key={index} className="glass" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{award.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{award.event} ({award.date})</p>
                  </div>
                  <div style={{ fontSize: "1.5rem" }}>🏆</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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


export default Education;

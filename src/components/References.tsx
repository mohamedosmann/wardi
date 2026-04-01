"use client";

const References = () => {
  const references = [
    {
      name: "Dr. Mohamed Omar Abdullahi",
      role: "Director of SIMAD oLearn",
      email: "momar@simad.edu.so",
      phone: "+252 61 5965758"
    },
    {
      name: "Mr. Ahmed Abdi Elmi",
      role: "Head of Assessment & Technical Support",
      email: "Ahmed.elmi@simad.edu.so",
      phone: "+252 61 5259826"
    },
    {
      name: "Mr Yusuf Hussein Mohamed",
      role: "CEO YOS Chartered Accountants",
      email: "yusuf@yos.so",
      phone: "+252-61-8800906"
    }
  ];

  return (
    <section id="testimonials" style={{ padding: "160px 5%", background: "#FFFFFF", color: "#000000" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div className="badge" style={{ background: "rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.1)", color: "#555555", marginBottom: "1.5rem" }}>TESTIMONIALS</div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#15242E" }}>
            Professional<br />
            <span className="gold-text">References</span>
          </h2>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2.5rem" }}>
          {references.map((ref, index) => (
            <div key={index} style={{ 
              background: "rgba(0,0,0,0.01)", 
              border: "1px solid rgba(0,0,0,0.06)", 
              borderRadius: "30px",
              padding: "3.5rem",
              position: "relative"
            }}>
              <div style={{ fontSize: "4rem", color: "var(--accent-gold)", opacity: 0.2, position: "absolute", top: "2rem", right: "3rem", lineHeight: "1" }}>"</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#15242E", marginBottom: "0.5rem" }}>{ref.name}</h3>
              <p style={{ color: "var(--accent-gold)", fontWeight: "700", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2rem" }}>{ref.role}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1rem", color: "#555555" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent-gold)" }}>📩</span>
                  <span>{ref.email}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent-gold)" }}>📞</span>
                  <span>{ref.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

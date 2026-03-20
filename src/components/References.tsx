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
    <section id="references" style={{ padding: "140px 24px", background: "#050505" }}>
      <div className="container">
        <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "4rem", textAlign: "center", letterSpacing: "-0.04em" }}>
          Professional <span style={{ opacity: 0.5 }}>References</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {references.map((ref, index) => (
            <div key={index} className="glass" style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.2rem" }}>{ref.name}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: "500", marginBottom: "2rem" }}>{ref.role}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                <p>
                   📩 {ref.email}
                </p>
                <p>
                   📞 {ref.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default References;

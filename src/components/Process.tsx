"use client";

const Process = () => {
  const steps = [
    {
      id: "01.",
      title: "Initial Consultation",
      description: "We begin with a deep dive into your requirements and goals to ensure alignment.",
      icon: "💬"
    },
    {
      id: "02.",
      title: "Strategy Development",
      description: "Our team drafts a bespoke roadmap tailored to your specific industry or personal needs.",
      icon: "📊"
    },
    {
      id: "03.",
      title: "Execution & Advocacy",
      description: "We implement the solution with precision, keeping you informed at every stage.",
      icon: "🛡️"
    },
    {
      id: "04.",
      title: "Project Delivery",
      description: "Final delivery and support to ensure the project meets all expectations.",
      icon: "🤝"
    }
  ];

  return (
    <section id="process" style={{ padding: "160px 5%", backgroundColor: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ maxWidth: "600px", marginBottom: "6rem" }}>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>PROCESS</div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#fff", marginBottom: "2rem" }}>
            Simple <span className="gold-text">Process</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
            I follow a clear, structured approach to ensure each project is handled with precision, transparency, and care. 
            From the initial consultation to final resolution, my process is designed to protect your interests and deliver confident outcomes.
          </p>
          <a href="#quote" className="btn-gold" style={{ marginTop: "2rem" }}>
            Get A Free Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>

        <div style={{ position: "relative", minHeight: "600px" }}>
          {/* Curvy Path SVG Placeholder */}
          <div style={{ position: "absolute", top: "20%", left: 0, width: "100%", height: "60%", zIndex: 0, opacity: 0.3 }}>
            <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path d="M0,200 C300,50 600,350 900,200 C1050,125 1200,200 1200,200" stroke="var(--accent-gold)" strokeWidth="4" fill="none" strokeDasharray="10 10" />
            </svg>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", position: "relative", zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                marginTop: index % 2 === 0 ? "100px" : "0",
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center"
              }}>
                <div style={{ 
                  width: "24px", 
                  height: "24px", 
                  borderRadius: "50%", 
                  background: "var(--accent-gold)", 
                  marginBottom: "2rem",
                  boxShadow: "0 0 20px var(--accent-gold)"
                }} />
                
                <div style={{ 
                  background: "#FFFFFF", 
                  color: "#000000", 
                  padding: "2.5rem", 
                  borderRadius: "24px",
                  width: "100%",
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "700" }}>{step.id}</div>
                    <div style={{ 
                      width: "40px", 
                      height: "40px", 
                      borderRadius: "50%", 
                      background: "rgba(200, 164, 80, 0.1)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      fontSize: "1.2rem"
                    }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", lineHeight: "1.2" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#555555", lineHeight: "1.6" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

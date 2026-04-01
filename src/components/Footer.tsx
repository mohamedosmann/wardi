"use client";

const Footer = () => {
  return (
    <footer id="contact" style={{ 
      backgroundColor: "var(--bg-primary)", 
      padding: "160px 5% 40px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: "4rem", position: "relative", zIndex: 1 }}>
        <div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#fff", marginBottom: "1.5rem" }}>
            Do You Like<br />
            <span className="gold-text">What You See?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: "1.6", maxWidth: "300px" }}>
            I help businesses create websites that work 24/7 as sales tools—clean, scalable, and easy to manage.
          </p>
          <p style={{ color: "#fff", fontWeight: "600" }}>Let's work together</p>
        </div>

        <div>
          <h4 style={{ color: "#fff", marginBottom: "2rem", fontSize: "1.2rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["About", "Experience", "Projects", "Testimonials", "FAQs", "Contact"].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase()}`} style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#fff", marginBottom: "2rem", fontSize: "1.2rem" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["Expertise", "Education", "Privacy Policy", "Terms & Conditions", "Support"].map((link) => (
              <li key={link}><a href={link.includes(" ") ? "#" : `#${link.toLowerCase()}`} style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#fff", marginBottom: "2rem", fontSize: "1.2rem" }}>Connect Me</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ color: "var(--accent-gold)" }}>📧</div>
              <span>mohamedosmann75@gmail.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ color: "var(--accent-gold)" }}>📞</div>
              <span>(+252) 618001420</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ color: "var(--accent-gold)" }}>📍</div>
              <span>Deynile, Somalia</span>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              {["f", "ig", "in", "x"].map((s) => (
                <div key={s} style={{ 
                  width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent-gold)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "bold", cursor: "pointer"
                }}>{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div style={{ 
        position: "absolute", 
        bottom: "-10%", 
        left: "5%", 
        right: "5%", 
        textAlign: "center",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        <h1 style={{ 
          fontSize: "25vw", 
          fontWeight: "900", 
          color: "rgba(255,255,255,0.03)", 
          letterSpacing: "0.05em",
          margin: 0,
          fontFamily: "var(--font-heading)",
          textTransform: "uppercase"
        }}>
          Mohamed
        </h1>
      </div>

      <div style={{ 
        maxWidth: "1400px", 
        margin: "80px auto 0", 
        paddingTop: "2rem", 
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        display: "flex",
        justifyContent: "space-between",
        color: "var(--text-muted)",
        fontSize: "0.9rem",
        position: "relative",
        zIndex: 1
      }}>
        <p>© Mohamed Osman {new Date().getFullYear()}</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


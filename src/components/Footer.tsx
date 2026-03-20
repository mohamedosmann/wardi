"use client";

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid rgba(255, 255, 255, 0.05)", padding: "120px 24px 60px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem", letterSpacing: "-0.04em" }}>
            Let's <span style={{ opacity: 0.5 }}>Connect</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "450px", fontSize: "1.1rem" }}>
            I am always open to discussing research opportunities, collaborative projects, or innovative tech solutions. Reach out and let's build the future together.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>
               📩 mohamedosmann75@gmail.com
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>
               📱 (+252) 618001420
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>
               📍 Deynile, Somalia
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ textAlign: "right" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
               Mohamed <span style={{ opacity: 0.5 }}>Osman</span>
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Software & ML Engineer
            </p>
          </div>

          
          <div style={{ textAlign: "right", color: "rgba(255, 255, 255, 0.2)", fontSize: "0.85rem" }}>
            <p>&copy; {new Date().getFullYear()} Mohamed Osman. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .container div {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;


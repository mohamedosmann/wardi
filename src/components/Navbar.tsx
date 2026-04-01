"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: scrolled ? "12px 24px" : "24px 24px",
        background: scrolled ? "rgba(21, 36, 46, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "1400px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "700", color: "#fff", textDecoration: "none", letterSpacing: "-0.03em", fontFamily: "var(--font-heading)" }}>
          Mohamed
        </Link>
        
        <div style={{ 
          display: "flex", 
          gap: "2.5rem", 
          padding: "8px 32px", 
          background: "rgba(255, 255, 255, 0.05)", 
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "99px",
          backdropFilter: "blur(10px)",
          alignItems: "center"
        }}>
          {["About", "Experience", "Projects", "Expertise", "Education", "Testimonials", "FAQs"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              style={{ 
                fontSize: "0.85rem", 
                color: "var(--text-secondary)", 
                textDecoration: "none",
                fontWeight: "500",
                letterSpacing: "0.02em",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </Link>
          ))}
        </div>

        <a href="#contact" className="btn-gold" style={{ padding: "10px 24px", fontSize: "0.9rem" }}>
          Contact Me
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


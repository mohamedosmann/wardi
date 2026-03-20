"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        transition: "all 0.3s ease",
        padding: scrolled ? "16px 24px" : "24px 24px",
        backgroundColor: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontSize: "1.2rem", fontWeight: "700", color: "#fff", textDecoration: "none", letterSpacing: "-0.02em" }}>
          M. Osman
        </Link>
        
        <div style={{ display: "flex", gap: "2rem" }}>
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              style={{ 
                fontSize: "0.9rem", 
                color: "var(--text-secondary)", 
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


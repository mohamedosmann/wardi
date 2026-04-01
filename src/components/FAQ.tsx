"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Do You Offer An Initial Consultation?",
      answer: "Yes, we offer a free initial consultation to discuss your project and how we can help."
    },
    {
      question: "How Are Project Costs Calculated?",
      answer: "Costs depend on the nature, complexity, and duration of the project. We explain all costs clearly before starting any work. We believe in transparency."
    },
    {
      question: "Will My Information Remain Confidential?",
      answer: "Absolutely. We adhere to the highest standards of client confidentiality and data protection."
    },
    {
      question: "How Long Will My Project Take?",
      answer: "The timeline varies significantly depending on the project type and complexity. We provide estimates during our initial strategy session."
    },
    {
      question: "Do You Handle Projects Outside Your City?",
      answer: "Yes, we handle select projects nationwide and even internationally for specific specialized services."
    }
  ];

  return (
    <section id="faqs" style={{ padding: "160px 5%", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem" }}>
        <div>
          <div className="badge" style={{ marginBottom: "1.5rem" }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", color: "#fff", marginBottom: "2rem" }}>
            Answers To<br />
            <span className="gold-text">Questions.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "450px" }}>
            Our FAQ section is designed to answer common questions about our software development services, costs, confidentiality, and consultation process. We believe in transparency.
          </p>
          <a href="#quote" className="btn-gold" style={{ marginTop: "2rem" }}>
            Get a free quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{ 
                background: "#FFFFFF", 
                borderRadius: "20px", 
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: openIndex === index ? "0 20px 40px rgba(0,0,0,0.1)" : "none"
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "2rem 2.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#15242E",
                  fontFamily: "var(--font-heading)"
                }}
              >
                {faq.question}
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "50%", 
                  background: openIndex === index ? "var(--accent-gold)" : "rgba(0,0,0,0.05)",
                  color: openIndex === index ? "#fff" : "#15242E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease"
                }}>
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                    style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              
              <div style={{ 
                height: openIndex === index ? "auto" : "0", 
                opacity: openIndex === index ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.4s ease"
              }}>
                <div style={{ padding: "0 2.5rem 2.5rem", color: "#555555", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

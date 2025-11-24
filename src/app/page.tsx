// src/app/page.tsx
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#f7fafc", padding: "60px 0" }}>
        <div className="container" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 48, marginBottom: 16 }}>We build beautiful digital products</h1>
            <p style={{ fontSize: 18, marginBottom: 20, color: "#555" }}>
              We design and develop websites and apps that help businesses grow. Clean UI, reliable code,
              and pixel-perfect responsiveness — ready to ship.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              <a className="button" href="/services">Our Services</a>
              <a className="button" href="/portfolio" style={{ background: "#eaeaea", color: "#222" }}>
                View Portfolio
              </a>
            </div>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            {/* local uploaded image path — build tooling will convert this to a served URL */}
            {/* Hero image — quick dev fix using uploaded file path */}
          <img
            src="/mnt/data/562525da-4f48-4b1d-a87d-0717284ed43b.png"
            alt="Hero"
            style={{
              maxWidth: "100%",
              borderRadius: 10,
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
            }}
          />
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <h2>Services</h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            Strategy, design and front-end development — packages tailored to startups and small teams.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Design & Branding</h3>
              <p>Create a visual identity that resonates with your customers and scales across platforms.</p>
            </div>

            <div className="card">
              <h3>Web Development</h3>
              <p>Fast, accessible React and Next.js front-ends with clear, maintainable code.</p>
            </div>

            <div className="card">
              <h3>Consulting</h3>
              <p>Product audits, technical reviews, and roadmap planning to reduce risk and speed delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section style={{ background: "#fcfdff", padding: "48px 0" }}>
        <div className="container">
          <h2>Selected Work</h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            A few projects that show our approach to design and code.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Landing Page — Fintech</h3>
              <p>Clean hero, conversion-focused layout and CMS-powered blog.</p>
            </div>

            <div className="card">
              <h3>Web App — Analytics</h3>
              <p>Real-time dashboards with modular components and responsive charts.</p>
            </div>

            <div className="card">
              <h3>Marketing Site — SaaS</h3>
              <p>Performance-optimized, accessible, and built for SEO.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 18 }}>
            <a className="button" href="/portfolio">See full portfolio</a>
          </div>
        </div>
      </section>

      {/* Small team / CTA */}
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <h2>About the team</h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            Small, focused team. Big impact. We ship fast and keep codebases healthy.
          </p>

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div className="card" style={{ flex: "1 1 220px" }}>
              <h4>Lead Designer</h4>
              <p>Product-driven visual design and prototyping.</p>
            </div>

            <div className="card" style={{ flex: "1 1 220px" }}>
              <h4>Frontend Engineer</h4>
              <p>React/Next.js specialist — UX-first implementation.</p>
            </div>

            <div className="card" style={{ flex: "1 1 220px" }}>
              <h4>PM / Strategy</h4>
              <p>Roadmaps, research and launch planning.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a className="button" href="/contact">Start a project</a>
          </div>
        </div>
      </section>
    </>
  );
}

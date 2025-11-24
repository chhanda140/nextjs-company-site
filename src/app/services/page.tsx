// src/app/services/page.tsx
import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <section style={{ padding: "48px 0" }}>
        <div className="container" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h1>Our Services</h1>
            <p style={{ color: "#555", marginBottom: 20 }}>
              We offer end-to-end product design and front-end engineering services. Below are
              a few common packages — each can be tailored to your timeline and budget.
            </p>

            <div className="grid">
              <div className="card">
                <h3>Design & Prototyping</h3>
                <p>
                  User research, wireframes, and high-fidelity prototypes to validate product ideas
                  before development.
                </p>
                <ul>
                  <li>UX research & interviews</li>
                  <li>Clickable prototypes</li>
                  <li>Design systems & components</li>
                </ul>
                <div style={{ marginTop: 12 }}>
                  <a className="button" href="/contact">Talk to us</a>
                </div>
              </div>

              <div className="card">
                <h3>Frontend Development</h3>
                <p>
                  React & Next.js development with accessibility, performance and maintainability in mind.
                </p>
                <ul>
                  <li>SSR & SSG with Next.js</li>
                  <li>Component libraries</li>
                  <li>Testing & CI setup</li>
                </ul>
                <div style={{ marginTop: 12 }}>
                  <a className="button" href="/contact">Get a quote</a>
                </div>
              </div>

              <div className="card">
                <h3>Growth & Optimization</h3>
                <p>
                  Conversion optimization, A/B testing support, and analytics setup so you can measure impact.
                </p>
                <ul>
                  <li>Analytics & funnels</li>
                  <li>Performance audits</li>
                  <li>SEO basics & best practices</li>
                </ul>
                <div style={{ marginTop: 12 }}>
                  <a className="button" href="/contact">Start a project</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            {/* visual: dev-only path (use public/hero.png before deploy) */}
            <img
              src="/mnt/data/562525da-4f48-4b1d-a87d-0717284ed43b.png"
              alt="Services visual"
              style={{ maxWidth: "100%", borderRadius: 10, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 0", background: "#fcfcfd" }}>
        <div className="container">
          <h2>How we work</h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            We pair design and development into short cycles focused on delivering usable outcomes.
            Typical phases:
          </p>

          <div className="grid">
            <div className="card">
              <h3>Discovery</h3>
              <p>Kickoff, user research and goal setting so we build the right product.</p>
            </div>

            <div className="card">
              <h3>Design</h3>
              <p>Wireframes, visual design and interactive prototypes to align stakeholders.</p>
            </div>

            <div className="card">
              <h3>Build</h3>
              <p>Implementation, testing, and iterative feedback to deliver production-ready code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

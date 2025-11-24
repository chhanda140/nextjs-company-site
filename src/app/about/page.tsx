// src/app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a small, focused studio dedicated to building clean, fast and
        reliable digital experiences. Our team combines design, engineering and
        strategy to help businesses create impactful products that users love.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>Our Mission</h2>
        <p>
          We believe great products come from simple ideas executed with clarity
          and precision. That means clear UI, maintainable code, accessible pages,
          and seamless performance — across all devices.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Our Values</h2>

        <div className="grid">
          <div className="card">
            <h3>Clarity</h3>
            <p>
              No overcomplication. We focus on clean, purposeful interfaces and
              straightforward development.
            </p>
          </div>

          <div className="card">
            <h3>Efficiency</h3>
            <p>
              We ship quickly without sacrificing quality. Clear communication and
              lean processes help us deliver on time.
            </p>
          </div>

          <div className="card">
            <h3>Quality</h3>
            <p>
              Every component, layout and interaction is crafted with attention to
              detail so your product stands out.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>The Team</h2>

        <div className="grid">
          <div className="card">
            <h3>Lead Designer</h3>
            <p>Responsible for UI/UX, visual language and prototypes.</p>
          </div>

          <div className="card">
            <h3>Frontend Engineer</h3>
            <p>Specializes in React and Next.js, turning designs into reality.</p>
          </div>

          <div className="card">
            <h3>Product Strategist</h3>
            <p>Works on product direction, research and roadmap planning.</p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a className="button" href="/contact">
          Contact Us
        </a>
      </div>
    </div>
  );
}

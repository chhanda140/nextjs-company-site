export default function PortfolioPage() {
  return (
    <main className="page-container">
      <h1 className="page-title">Portfolio</h1>

      <p className="page-subtitle">
        Here are some selected projects we have designed and built.
      </p>

      <div className="portfolio-grid">

        {/* Project 1 */}
        <div className="portfolio-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 1"
            className="portfolio-image"
          />
          <h3 className="portfolio-title">Project One</h3>
          <p className="portfolio-desc">
            A modern, responsive landing page designed for a SaaS startup.
          </p>
        </div>

        {/* Project 2 */}
        <div className="portfolio-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 2"
            className="portfolio-image"
          />
          <h3 className="portfolio-title">Project Two</h3>
          <p className="portfolio-desc">
            A full brand identity and website redesign for a client.
          </p>
        </div>

        {/* Project 3 */}
        <div className="portfolio-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 3"
            className="portfolio-image"
          />
          <h3 className="portfolio-title">Project Three</h3>
          <p className="portfolio-desc">
            A clean, fast e-commerce UI optimized for conversions.
          </p>
        </div>

      </div>
    </main>
  );
}

import './ContentCards.css';

function Overview({ onNavigate }) {
  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">Overview</h1>
      </header>

      <main className="content-card-main">
        <section className="content-card-section">
          <p>This content has been moved to the main landing page under the "Overview" collapsible section.</p>
        </section>
      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Overview;
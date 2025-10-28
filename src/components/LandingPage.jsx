import './LandingPage.css';

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div className="logo">Terminus EC</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Welcome to Terminus EC Training</h1>
          <p className="hero-subtitle">
            A modern platform for learning and development
          </p>
          <div className="resource-buttons">
            <button className="resource-button" onClick={() => onNavigate('guidelines')}>
              <span className="button-icon">📚</span>
              <span className="button-text">EC Guidelines</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('videos')}>
              <span className="button-icon">🎥</span>
              <span className="button-text">Tutorial Videos</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('workbook')}>
              <span className="button-icon">📝</span>
              <span className="button-text">Practice Workbook</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;


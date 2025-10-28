import './ComingSoon.css';

function Videos({ onNavigate }) {
  return (
    <div className="coming-soon-page">
      <header className="coming-soon-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="page-logo">Tutorial Videos</div>
      </header>
      
      <main className="coming-soon-content">
        <div className="coming-soon-icon">🎥</div>
        <h1>Tutorial Videos</h1>
        <p className="coming-soon-text">
          Video tutorials are coming soon! Check back later for comprehensive training videos.
        </p>
        <button className="home-button" onClick={() => onNavigate('home')}>
          Return to Home
        </button>
      </main>

      <footer className="coming-soon-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Videos;


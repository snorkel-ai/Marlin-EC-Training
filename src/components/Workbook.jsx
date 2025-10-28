import './ComingSoon.css';

function Workbook({ onNavigate }) {
  return (
    <div className="coming-soon-page">
      <header className="coming-soon-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="page-logo">Practice Workbook</div>
      </header>
      
      <main className="coming-soon-content">
        <div className="coming-soon-icon">📝</div>
        <h1>Practice Workbook</h1>
        <p className="coming-soon-text">
          Practice exercises and workbook materials are coming soon! Check back later for hands-on training materials.
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

export default Workbook;


import './Videos.css';
import './Workbook.css';

function OnboardingMaterials({ onNavigate }) {
  return (
    <div className="videos-page">
      <header className="videos-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="videos-logo">Onboarding Video and Slides</div>
      </header>
      
      <main className="videos-content">
        <h1 className="videos-title">Onboarding Video and Slides</h1>
        <div className="workbook-intro">
          <p>
            This page has been moved to the main landing page. Please navigate back to the home page to access the onboarding materials.
          </p>
        </div>
      </main>

      <footer className="videos-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OnboardingMaterials;


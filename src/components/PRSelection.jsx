import { useEffect } from 'react';
import './ContentCards.css';

function PRSelection({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">PR Selection</h1>
      </header>

      <main className="content-card-main">
        
        <section className="content-card-section">
          <h2>Phase 3: Select Your Repo and Pull Request</h2>
          <p style={{ fontSize: '1.1rem', color: '#1e40af', fontWeight: 600 }}>
            Marlin-PR-Selection Instructions
          </p>
        </section>

        <section className="content-card-section">
          <h2>Step 1: Understand the Interface</h2>
          
          <img 
            src={`${import.meta.env.BASE_URL}media/images/PR-Selection.png`} 
            alt="PR Selection Interface" 
            style={{ 
              maxWidth: '100%', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '1.5rem'
            }} 
          />

          <p>The application interface is a "split-screen" layout:</p>
          <ul>
            <li><strong>Left Side:</strong> Displays our PR Glossary consisting of many repositories each with a number of available pull requests</li>
            <li><strong>Right Side:</strong> Here you will select your repository along with which corresponding pull request you want to work with</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Step 2: Review and Identify a Suitable PR</h2>
          <p>Read through the repositories and pull requests to identify one you feel comfortable with.</p>
          
          <div style={{ 
            backgroundColor: '#fef3c7', 
            padding: '1rem 1.25rem', 
            borderRadius: '8px', 
            borderLeft: '4px solid #f59e0b',
            marginTop: '1rem'
          }}>
            <p style={{ margin: 0, color: '#92400e', fontWeight: 500 }}>
              ⚠️ Double check that the pull request is sufficiently complex:
            </p>
            <ul style={{ margin: '0.75rem 0 0 0', color: '#92400e' }}>
              <li>You'd expect a human engineer to take <strong>at least 2 hours</strong> to complete it</li>
              <li>You'd expect a model to struggle to complete the request on its <strong>1st or 2nd try</strong></li>
              <li>It primarily involves <strong>Python coding</strong></li>
            </ul>
          </div>
        </section>

        <section className="content-card-section">
          <h2>Step 3: Make Your Selection</h2>
          <ol>
            <li>Select your repository under <strong>'Multi-dimensional radio'</strong></li>
            <li>Select your corresponding pull request under <strong>'Sub-topic required'</strong></li>
            <li>Hit <strong>SUBMIT</strong></li>
          </ol>
        </section>

        <section className="content-card-section">
          <h2>Step 4: Wait for Processing</h2>
          <p>Wait <strong>1-2 minutes</strong> for Snorkel systems to process your choice before moving onto <strong>Marlin-Prompt-Preparation</strong>.</p>
          
          <div style={{ 
            backgroundColor: '#dbeafe', 
            padding: '1rem 1.25rem', 
            borderRadius: '8px', 
            borderLeft: '4px solid #3b82f6',
            marginTop: '1rem'
          }}>
            <p style={{ margin: 0, color: '#1e40af' }}>
              💡 <strong>Tip:</strong> Use this time to start thinking about how you'll approach the prompt preparation phase.
            </p>
          </div>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PRSelection;
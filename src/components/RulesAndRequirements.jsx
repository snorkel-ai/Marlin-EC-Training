import './ContentCards.css';

function RulesAndRequirements({ onNavigate }) {
  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">Rules & Requirements</h1>
      </header>

      <main className="content-card-main">

        <section className="content-card-section">
          <h2>Operating System Requirements</h2>
          <p>You must use macOS or Linux.</p>
          <p>Windows is not supported unless you can run Linux reliably.</p>
        </section>

        <section className="content-card-section">
          <h2>Required Tools</h2>
          <p>You need the following installed and working before you start:</p>
          <ul>
            <li>VS Code, with the <code>code</code> command available in your terminal (added to PATH)</li>
            <li>tmux, installed through your system package manager</li>
            <li>Git and terminal/CLI access</li>
            <li>Python installed and available from the command line</li>
            <li>A stable internet connection (required for access and authentication)</li>
          </ul>
          <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
            <em>For detailed setup instructions, see the <button onClick={() => onNavigate('cli')} style={{ background: 'none', border: 'none', color: '#2563eb', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>CLI Setup Guide</button>.</em>
          </p>
        </section>

        <section className="content-card-section">
          <h2>Time Limits</h2>
          <ul>
            <li><strong>Prompt Preparation:</strong> 4 hours from the moment you start</li>
            <li><strong>Execution:</strong> Tasks are expected to progress through multiple iterations/turns, not a single pass</li>
          </ul>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RulesAndRequirements;
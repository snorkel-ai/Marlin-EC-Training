import './ContentCards.css';

function RulesAndRequirements({ onNavigate }) {
  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">Requirements</h1>
      </header>

      <main className="content-card-main">
        
        <section className="content-card-section">
          <h2>Operating System Requirements</h2>
          <p>You must use:</p>
          <ul>
            <li>macOS or</li>
            <li>Linux</li>
          </ul>
          <p>Windows is not supported unless you can run Linux.</p>
        </section>

        <section className="content-card-section">
          <h2>Required Tools</h2>
          <ul>
            <li>VS Code (added to PATH)</li>
            <li>tmux (installed via package manager)</li>
            <li>Git + CLI access</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Project Rules</h2>
          
          <h3>Strict No-LLM Policy</h3>
          <p>You cannot use any external LLM or AI tool to help:</p>
          <ul>
            <li>Write prompts</li>
            <li>Generate reasoning</li>
            <li>Review model outputs</li>
            <li>Draft responses</li>
            <li>Analyze the PR</li>
            <li>Produce any part of your submission</li>
          </ul>
          <p>Only your own reasoning is allowed.</p>

          <h3>Task Time Limits</h3>
          <ul>
            <li>Prompt Preparation: 4 hours</li>
            <li>Model Workspace tasks should progress in multiple iterations</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Common Errors to Watch For</h2>
          <ul>
            <li>Missing file changes</li>
            <li>Tests not updated</li>
            <li>Duplicate code blocks</li>
            <li>Incorrect paths or imports</li>
            <li>Model output contradicts acceptance criteria</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Reporting Issues</h2>
          <p>If you encounter bugs or platform issues, report:</p>
          <ul>
            <li>Date</li>
            <li>UUID</li>
            <li>Where it occurred</li>
            <li>Detailed description</li>
            <li>Optional screenshot</li>
            <li>Time lost</li>
          </ul>
          <p>This helps the team resolve issues quickly.</p>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RulesAndRequirements;
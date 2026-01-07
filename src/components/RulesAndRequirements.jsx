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
          <h2>CLI Tool Tutorial</h2>
          <div style={{ position: 'relative', paddingBottom: '64.94708994708994%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <iframe src="https://www.loom.com/embed/888ac13d11c24d1099f7ff6b6eaa334b" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
        </section>

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
        </section>

        <section className="content-card-section">
          <h2>Execution Requirements</h2>
          <p>Some requirements are easy to miss but will block progress if they're not followed:</p>
          <ul>
            <li>The CLI tool must be run from the root of the repository directory</li>
            <li>The workflow opens two workspaces (Trajectory A and Trajectory B) for comparison</li>
            <li>You must review changes using diffs (VS Code does not always highlight changed lines automatically)</li>
            <li>Multi-turn work may require restarting the CLI using the continue flow between turns</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Project Rules</h2>
          
          <h3>No External LLMs (Strict)</h3>
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🚫 Using external LLMs or AI tools outside the provided platform is not allowed.
            </p>
          </div>
          <p>This includes using external tools to:</p>
          <ul>
            <li>Write or rewrite prompts</li>
            <li>Generate explanations or reasoning</li>
            <li>Review model outputs</li>
            <li>Analyze the pull request</li>
            <li>Draft any part of your submission text</li>
          </ul>
          <p>If your submission shows signs of external LLM-generated content or automated reasoning, it may be rejected. This project evaluates your technical judgment and your ability to explain decisions based on the code.</p>

          <h3>Time Limits</h3>
          <ul>
            <li><strong>Prompt Preparation:</strong> 4 hours from the moment you start</li>
            <li><strong>Execution:</strong> Tasks are expected to progress through multiple iterations/turns, not a single pass</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Common Errors to Watch For</h2>
          <p>These are frequent causes of low-quality submissions:</p>
          <ul>
            <li>Missing required file changes</li>
            <li>Tests not added or not updated when needed</li>
            <li>Duplicate code blocks or repeated logic</li>
            <li>Incorrect paths, imports, or module references</li>
            <li>Changes that don't match the intended behavior or acceptance criteria</li>
            <li>Claiming the model made updates that are not present in the diff</li>
            <li>Skipping a full diff review of all modified files</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Reporting Issues</h2>
          <p>If you hit a bug or platform issue, report it with:</p>
          <ul>
            <li>Date the issue occurred</li>
            <li>UUID (or task identifier, if shown)</li>
            <li>Where it occurred (tool, page, step, or screen)</li>
            <li>A detailed description of what happened</li>
            <li>Screenshot (optional but helpful)</li>
            <li>Time lost due to the issue</li>
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
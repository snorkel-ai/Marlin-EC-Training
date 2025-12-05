import './ContentCards.css';

function PRSelection({ onNavigate }) {
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
          <h2>Purpose of This Stage</h2>
          <p>PR Selection ensures you choose work with the right depth and complexity. This determines whether the model's output will reflect meaningful software engineering tasks.</p>
        </section>

        <section className="content-card-section">
          <h2>How to Choose a Valid PR</h2>
          <p>Your chosen PR must:</p>
          <ul>
            <li>Involve Python code updates</li>
            <li>Be complex enough that a human engineer would need 2+ hours</li>
            <li>Require multiple iterations for an AI model to complete</li>
            <li>Not be trivial, documentation-only, or test-only</li>
            <li>Represent a realistic, mid-level engineering task</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Evaluating the Repository</h2>
          <p>Before selecting:</p>
          
          <h3>1. Open the repo on GitHub</h3>
          <p>Review the structure, existing modules, and how tests are organized.</p>

          <h3>2. Review the open PR you're selecting</h3>
          <p>Confirm it includes substantial logic, not just formatting or minor refactors.</p>

          <h3>3. Check for Python changes</h3>
          <p>The project requires PRs that modify Python files.</p>
        </section>

        <section className="content-card-section">
          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Selecting PRs with no Python changes</li>
            <li>Selecting trivial or obviously simple PRs</li>
            <li>Selecting tasks focused only on renaming, formatting, or comments</li>
            <li>Selecting PRs that can be solved in one model turn</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>When You're Confident</h2>
          <p>Only submit when you're sure the PR is complex, stable, and something you can fully reason about.</p>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PRSelection;
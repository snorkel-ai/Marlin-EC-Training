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
          <h2>Purpose of This Stage</h2>
          <p>This is where you generate the actual code changes — the production-ready PR — based on your prepared prompt.</p>
        </section>

        <section className="content-card-section">
          <h2>What You Do in This Workspace</h2>
          
          <h3>1. Upload the Repo Package</h3>
          <p>You'll upload the project files so the model can inspect the full codebase.</p>

          <h3>2. Provide the Correct PR Link</h3>
          <p>You must paste the direct link to the GitHub pull request associated with your selection. This maps the work to your submission.</p>

          <h3>3. Run the Model Iteratively</h3>
          <p>You should expect multiple turns — no fewer than three — to reach a complete solution.</p>
          <p>Each turn should:</p>
          <ul>
            <li>Add missing updates</li>
            <li>Fix incorrect logic</li>
            <li>Update tests</li>
            <li>Align with acceptance criteria</li>
            <li>Improve accuracy</li>
          </ul>

          <h3>4. Review Every Change Carefully</h3>
          <p>You must verify that:</p>
          <ul>
            <li>The model actually made the file changes it claims</li>
            <li>Tests run and reflect the final state</li>
            <li>No duplicate code or duplicated tests were introduced</li>
            <li>File structure is correct</li>
            <li>All required modules were updated</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Common Workspace Behaviors</h2>
          <ul>
            <li>Model responses may take time to generate</li>
            <li>Occasionally you must re-run a request</li>
            <li>You may need multiple iterations to correct subtle logic issues</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>When to Submit</h2>
          <p>Submit only when the code is:</p>
          <ul>
            <li>Fully correct</li>
            <li>Matches your planned approach</li>
            <li>Implements all acceptance criteria</li>
            <li>Includes updated or new tests</li>
            <li>Free of placeholder or incomplete logic</li>
          </ul>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Overview;
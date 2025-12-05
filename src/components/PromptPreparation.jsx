import './ContentCards.css';

function PromptPreparation({ onNavigate }) {
  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">Prompt Preparation</h1>
      </header>

      <main className="content-card-main">
        
        <section className="content-card-section">
          <h2>Purpose of This Stage</h2>
          <p>Prompt Preparation is where you build a complete understanding of the task, document your reasoning, and prepare the model's instruction prompt.</p>
          <p>This step is critical — it determines the quality of the final PR.</p>
        </section>

        <section className="content-card-section">
          <h2>Key Components You Must Complete</h2>
          
          <h3>1. Context Setting</h3>
          <ul>
            <li>What the repo does</li>
            <li>What the PR is trying to change or fix</li>
            <li>Why the change matters</li>
          </ul>

          <h3>2. Task Approach</h3>
          <ul>
            <li>Current behavior vs. expected behavior</li>
            <li>Required file updates</li>
            <li>Dependencies or functions affected</li>
            <li>Edge cases (explicit, measurable, testable)</li>
            <li>New or updated test cases</li>
            <li>Acceptance criteria</li>
          </ul>

          <h3>3. Prompt Definition</h3>
          <ul>
            <li>A self-contained prompt describing exactly what the model must do</li>
            <li>Clear, objective instructions</li>
            <li>No role-based prompting</li>
            <li>Fully structured, not conversational</li>
          </ul>

          <h3>4. Effort & Complexity</h3>
          <ul>
            <li>Estimate engineering difficulty</li>
            <li>Describe why the PR is non-trivial</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Quality Expectations</h2>
          <p>Your answers must be:</p>
          <ul>
            <li>Specific</li>
            <li>Measurable</li>
            <li>Technically grounded</li>
            <li>Free of vague language</li>
            <li>Fully aligned (expected behavior ↔ tests ↔ edge cases)</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Time Limit</h2>
          <p>You have 4 hours to complete Prompt Preparation once started.</p>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PromptPreparation;
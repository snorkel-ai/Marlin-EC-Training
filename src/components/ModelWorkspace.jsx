import './ContentCards.css';

function ModelWorkspace({ onNavigate }) {
  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">Execution & Finalization</h1>
      </header>

      <main className="content-card-main">

        <section className="content-card-section">
          <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginBottom: '1rem' }}>
            <p style={{ margin: 0, color: '#1e40af', fontWeight: 600 }}>
              📋 <strong>Important:</strong> For final submission, use <strong>Marlin-Prompt-Review V2</strong> on the Snorkel platform.
            </p>
          </div>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#92400e', fontWeight: 600 }}>
              ⚠️ Important Note on PR Checkout (Please Read)
            </p>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#92400e' }}>
              When working on a Marlin submission, do <strong>NOT</strong> check out the Pull Request branch itself (e.g. <code style={{ backgroundColor: '#fde68a', padding: '0.125rem 0.375rem', borderRadius: '4px' }}>pr-833</code>) as your working state.
            </p>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#92400e' }}>
              Checking out the PR branch will load code that already contains the feature or fix being requested, which defeats the purpose of the task and can invalidate your submission.
            </p>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#92400e' }}>
              Always start from the <strong>pre-PR state</strong> of the repository, which represents the code before the PR changes were introduced.
            </p>
            <ul style={{ margin: '0.75rem 0', color: '#92400e', paddingLeft: '1.25rem' }}>
              <li>If your Prompt-Preparation task is approved, you will receive an email with a link to the correct version of the repository.</li>
              <li>This repository snapshot is already set to the appropriate pre-PR baseline and should be used with the CLI tool.</li>
              <li>You should not need to manually check out the PR branch or attempt to reconstruct it yourself.</li>
            </ul>
            <p style={{ margin: 0, color: '#92400e', fontWeight: 500 }}>
              If you are ever unsure whether you're on the correct repo state, do not proceed — reach out in Slack for confirmation before continuing.
            </p>
          </div>
        </section>

        <section className="content-card-section">
          <h2>Tutorial Video</h2>
          <div style={{ position: 'relative', paddingBottom: '64.86161251504213%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <iframe src="https://www.loom.com/embed/d368f4ece5d248a3af7ed53edca7ed20" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
        </section>

        <section className="content-card-section">
          <h2>Purpose of This Stage</h2>
          <p>Execution & Finalization is where the planned work is carried out, evaluated, and finalized.</p>
          <p>In this stage, you use the provided tools to run the task, review the model's outputs, iterate as needed, and select the best result. This is where planning is tested against real code changes, and where correctness, completeness, and judgment matter most.</p>
          <p>This step determines what is ultimately submitted for review.</p>
        </section>

        <section className="content-card-section">
          <h2>Key Components You Must Complete</h2>
          
          <h3>1. Task Execution</h3>
          <ul>
            <li>Run the task using the provided CLI and tools</li>
            <li>Generate model responses based on your prepared prompt</li>
            <li>Ensure execution follows the intent defined in the preparation stage</li>
          </ul>

          <h3>2. Output Review</h3>
          <ul>
            <li>Review all generated code changes carefully</li>
            <li>Compare outputs against the expected behavior</li>
            <li>Identify missing logic, incorrect assumptions, or unintended changes</li>
            <li>Verify that updates follow the repository's structure and conventions</li>
          </ul>

          <h3>3. Iteration and Refinement</h3>
          <ul>
            <li>Iterate on the prompt if outputs are incomplete or incorrect</li>
            <li>Discard approaches that do not meet requirements</li>
            <li>Refine the solution across turns until it satisfies the acceptance criteria</li>
          </ul>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginTop: '1rem' }}>
            <p style={{ margin: 0, color: '#92400e' }}>
              ⚠️ Iterations must be intentional and justified. Re-running prompts without clear reasoning is strongly discouraged.
            </p>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>4. Response Selection</h3>
          <ul>
            <li>Compare the multiple model responses provided</li>
            <li>Select the response that best implements the intended behavior</li>
            <li>Be prepared to clearly justify why this response was chosen over the alternative</li>
          </ul>

          <h3>5. Finalization and Submission</h3>
          <ul>
            <li>Perform a final line-by-line review of all modified files</li>
            <li>Confirm that only relevant changes were made</li>
            <li>Ensure behavior, edge cases, and tests (if applicable) are handled correctly</li>
            <li>Claim and submit your work for review</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>Use of LLMs and External Tools</h2>
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🚫 The use of external LLMs or automated tools outside the provided platform is strictly prohibited.
            </p>
          </div>
          <p>Relying on external LLMs to analyze code, generate reasoning, or draft explanations undermines the purpose of this stage. Submissions that show signs of heavy or direct LLM usage may be rejected during review.</p>
          <p>This stage evaluates your technical judgment and decision-making. The model outputs you review should come only from the provided tools, and all reasoning and evaluation must be your own.</p>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ModelWorkspace;
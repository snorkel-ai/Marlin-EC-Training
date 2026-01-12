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
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🚫 <strong>Do not reference the PR in your prompt.</strong> You need to imagine yourself as the developer who was originally building this PR. You cannot reference the PR that already exists to explain how to build it — write instructions as if the PR does not exist yet.
            </p>
          </div>

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
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🔄 <strong>Minimum 3 turns required.</strong> Your submission must include at least three turns of iteration with the model. Single-turn or two-turn submissions will not be accepted.
            </p>
          </div>
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
          <h3 style={{ marginTop: '1.5rem' }}>4. Response Selection</h3>
<ul>
  <li>Compare the multiple model responses provided</li>
  <li>Select the response that best implements the intended behavior</li>
  <li>Be prepared to clearly justify why this response was chosen over the alternative</li>
</ul>

<div
  style={{
    backgroundColor: '#eff6ff',
    padding: '1rem 1.25rem',
    borderRadius: '8px',
    borderLeft: '4px solid #2563eb',
    marginTop: '1rem',
  }}
>
  <p style={{ margin: 0, color: '#1e40af', fontWeight: 700 }}>
    ✅ Rating checklist (use this to justify multi-axis ratings)
  </p>
  <p style={{ margin: '0.5rem 0 0', color: '#1e40af' }}>
    Use the dimensions below to keep ratings consistent and to decide whether the code is production-ready.
  </p>
</div>

<div className="content-card-subsection">
  <h4 style={{ marginTop: '1rem' }}>Logic & Correctness</h4>
  <ul>
    <li>Does the implementation match the intended behavior?</li>
    <li>Are edge cases and error conditions properly handled?</li>
    <li>Is the control flow clear and free of subtle bugs?</li>
    <li>Are there any off-by-one errors, null pointer exceptions, or race conditions?</li>
    <li>Is the algorithm/approach correct for the problem being solved?</li>
    <li>Are boundary conditions (empty inputs, maximum values, etc.) handled correctly?</li>
  </ul>

  <h4>Naming & Clarity</h4>
  <ul>
    <li>Do variable, function, and class names clearly express their purpose?</li>
    <li>Is domain terminology used consistently throughout?</li>
    <li>Are boolean names and conditions expressed positively when possible?</li>
    <li>Do names avoid ambiguous abbreviations or insider knowledge?</li>
    <li>Are assumptions about inputs, outputs, or behavior clearly documented?</li>
    <li>Would a new developer understand what each component does from its name alone?</li>
    <li>Are units clear in variable names (e.g., delaySeconds vs delay)?</li>
  </ul>

  <h4>Organization & Modularity</h4>
  <ul>
    <li>Are functions/methods focused on a single responsibility?</li>
    <li>Is there duplicate code that should be extracted into reusable functions?</li>
    <li>Are source files reasonably sized (not thousands of lines)?</li>
    <li>Are functions/methods concise and focused (not hundreds of lines)?</li>
    <li>Is related functionality grouped together logically?</li>
    <li>Are abstraction levels consistent (not mixing high and low-level operations)?</li>
    <li>Is there proper separation of concerns (e.g., I/O separate from business logic)?</li>
    <li>Does each class have high cohesion (all methods relate to its purpose)?</li>
    <li>Is cyclomatic complexity reasonable (avoiding deeply nested code)?</li>
    <li>Are there parallel implementations of the same functionality?</li>
  </ul>

  <h4>Interface Design</h4>
  <ul>
    <li>Are APIs intuitive and hard to misuse?</li>
    <li>Do function signatures minimize coupling (avoiding unnecessary parameters)?</li>
    <li>Are return values and side effects predictable and well-documented?</li>
    <li>Is mutability controlled and explicit?</li>
    <li>Do functions have reasonable parameter counts (use objects for complex configs)?</li>
    <li>Are return types consistent (avoiding different types based on conditions)?</li>
    <li>Is it clear what each function does without reading its implementation?</li>
    <li>Are required vs optional parameters clearly distinguished?</li>
    <li>Do interfaces follow established patterns and conventions?</li>
  </ul>

  <h4>Error Handling & Robustness</h4>
  <ul>
    <li>Are specific exception types used with contextual error messages?</li>
    <li>Is there a consistent error handling strategy (fail fast vs recovery)?</li>
    <li>Is input validation performed early at system boundaries?</li>
    <li>Are errors properly propagated rather than silently swallowed?</li>
    <li>Is resource management handled properly (files closed, memory freed)?</li>
    <li>Are there any bare except clauses that could hide bugs?</li>
    <li>Do error messages provide enough context to debug issues?</li>
    <li>Are partial failures handled gracefully?</li>
    <li>Is defensive programming used appropriately (not excessively)?</li>
  </ul>

  <h4>Comments & Documentation</h4>
  <ul>
    <li>Do comments explain WHY something is done, not WHAT is being done?</li>
    <li>Are complex algorithms or business logic clearly explained?</li>
    <li>Have comments been updated to match code changes?</li>
    <li>Are there any AI-generated chain-of-thought comments that should be removed?</li>
    <li>Are there placeholder comments saying code was removed/replaced?</li>
    <li>Is there appropriate documentation for public APIs?</li>
    <li>Are edge cases and non-obvious behavior documented?</li>
    <li>Are there too many obvious comments that add noise?</li>
    <li>Do comments provide value to future maintainers?</li>
  </ul>

  <h4>Ready for Review / Merge</h4>
  <ul>
    <li>Is there any debug code, print statements, or console.log calls?</li>
    <li>Has all commented-out code been removed?</li>
    <li>Is the code properly formatted according to project standards?</li>
    <li>Are all temporary files, build artifacts, or test outputs removed?</li>
    <li>Does the code follow the established conventions for the codebase?</li>
    <li>Are commit messages clear and follow project guidelines?</li>
    <li>Is version control hygiene maintained (no large binary files, etc.)?</li>
    <li>Are all tests passing and coverage adequate?</li>
    <li>Has the code been linted and does it pass static analysis?</li>
    <li>Are there any hardcoded values that should be configurable?</li>
    <li>Is sensitive information (passwords, keys) properly handled?</li>
  </ul>
</div>

<div
  style={{
    backgroundColor: '#f3f4f6',
    padding: '1rem 1.25rem',
    borderRadius: '8px',
    borderLeft: '4px solid #6b7280',
    marginTop: '1rem',
  }}
>
  <p style={{ margin: 0, color: '#374151' }}>
    Tip: If ratings differ across axes, add a 1–2 sentence justification for each outlier score (e.g., “Correct but poor modularity due to duplicated parsing logic.”).
  </p>
</div>


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
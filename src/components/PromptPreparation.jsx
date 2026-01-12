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
          <h2>Tutorial Video</h2>
          <div style={{ position: 'relative', paddingBottom: '56.84210526315789%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <iframe src="https://www.loom.com/embed/2280f00825ec460e836575df2544aeb2" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
        </section>

        <section className="content-card-section">
          <h2>What You Need to Prepare</h2>
        </section>

        <section className="content-card-section">
          <h3>1. Repository and Pull Request Context</h3>
          <p>Provide the background needed to understand the task.</p>
          <p>Explain what the repository does, what the selected pull request is intended to change or fix, and why that change is necessary. This should be written clearly enough that someone unfamiliar with the codebase can understand the purpose and intent of the work.</p>
          <p>Focus on behavior and impact rather than implementation history.</p>
        </section>

        <section className="content-card-section">
          <h3>2. Task Approach</h3>
          <p>Describe how the change should be implemented and how correctness will be evaluated.</p>
          <p>Explain the current behavior and how it should differ after the change. Identify the files, functions, or components involved, and note any dependencies or interactions that may be affected.</p>
          <p>Call out relevant edge cases explicitly. These should be concrete and verifiable, not hypothetical. If tests need to be added or updated, describe what they should cover and how they validate the expected behavior.</p>
          <p>Define acceptance criteria that clearly indicate when the task should be considered complete.</p>
        </section>

        <section className="content-card-section">
          <h3>3. Prompt Definition</h3>
          <p>Write the prompt that will be used during execution.</p>
          <p>The prompt must be self-contained and describe exactly what the model is expected to do. Instructions should be clear, objective, and structured. Avoid conversational language and do not use role-based prompting.</p>
          <p>Someone reading the prompt alone should be able to understand the task without additional context.</p>
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#991b1b', fontWeight: 600 }}>
              🚫 <strong>Do not use role-based prompting.</strong> Avoid phrases like "You are a senior software engineer..." or "Act as an expert developer...". Write clear, direct instructions that describe exactly what needs to be done.
            </p>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#991b1b', fontWeight: 600 }}>
              🚫 <strong>Do not use LLMs.</strong> Avoid using any LLMs during the creation of the prompt or during any stage in general.
            </p>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🚫 <strong>Do not reference the PR in your prompt.</strong> You need to imagine yourself as the developer who was originally building this PR. You cannot reference the PR that already exists to explain how to build it — write instructions as if the PR does not exist yet.
            </p>
          </div>

          {/* Example Prompt Section */}
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid #22c55e', marginTop: '1.5rem' }}>
            <p style={{ margin: 0, marginBottom: '0.75rem', color: '#166534', fontWeight: 700, fontSize: '1rem' }}>
              ✅ Example of a Good Prompt
            </p>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '6px', border: '1px solid #bbf7d0', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', color: '#374151' }}>
              Update Gaphor's property editor to clearly separate model-level and diagram-level behavior for UML Dependency elements. Add a dedicated property page for Dependency model objects that shows Source and Target when selected from the model tree. Refactor the existing Dependency diagram item editor into a separate item-specific page with updated identifiers. Add support for the UML isFinalSpecialization attribute on classifiers and expose it through a toggle in the classifier property editor using proper transaction handling. Update the GTK UI definitions where needed and add unit tests to verify both Dependency property visibility and classifier specialization updates. The changes should follow the UML specification and leave the code production ready.
            </div>
            <p style={{ margin: '1rem 0 0.5rem 0', color: '#166534', fontWeight: 600 }}>
              Why this works:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#15803d', fontSize: '0.925rem', lineHeight: '1.7' }}>
              <li><strong>Names exact components and behaviors.</strong> No hand-waving — you know precisely which UI areas, model objects, and attributes are involved.</li>
              <li><strong>Outcomes you can actually verify.</strong> Property visibility, toggles, refactored editors, unit tests — all observable and testable.</li>
              <li><strong>Reads like a real GitHub issue.</strong> This is how engineers describe work to each other, not how someone asks ChatGPT for help.</li>
              <li><strong>Thinks about production.</strong> Transaction handling, spec compliance, and "production ready" signal that corner cases and code quality matter.</li>
              <li><strong>Sounds like a person wrote it.</strong> Domain-specific language, no "Act as..." preamble, no generic filler phrases.</li>
            </ul>
          </div>
        </section>

        <section className="content-card-section">
          <h3>4. Effort and Complexity</h3>
          <p>Briefly describe the level of engineering effort required.</p>
          <p>Explain why the pull request is non-trivial. This may include the number of files involved, the complexity of the logic, interactions between components, or the need to handle edge cases carefully.</p>
          <p>The goal is to demonstrate that the task requires real analysis and deliberate engineering decisions.</p>
        </section>

        <section className="content-card-section">
          <h2>Quality Expectations</h2>
          <p>Your responses should be precise and technically grounded.</p>
          <p>Avoid vague language. Claims about behavior should be testable, and descriptions of edge cases, tests, and acceptance criteria should align with one another. Inconsistencies between expected behavior, validation, and testing will lead to issues during execution.</p>
          <p>Work should reflect your own reasoning and understanding of the codebase.</p>
        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PromptPreparation;
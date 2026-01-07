import './Videos.css';

function FAQ({ onNavigate }) {
  return (
    <div className="videos-page">
      <header className="videos-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="videos-logo">FAQ</div>
      </header>
      
      <main className="videos-content">
        <h1 className="videos-title">Frequently Asked Questions</h1>
        <div className="faq-container">
          
          {/* Workflow & Sequencing */}
          <h2 className="faq-section-title">Workflow & Sequencing</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What is the overall workflow?</h3>
            <p className="faq-answer">The workflow follows a fixed sequence:</p>
            <p className="faq-answer"><strong>Repository & Pull Request Selection → Prompt Preparation → Execution & Finalization → Submission Review</strong></p>
            <p className="faq-answer">Each step builds on the previous one and must be completed in order.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Can I skip steps or jump ahead?</h3>
            <p className="faq-answer">No. Steps must be completed sequentially to proceed through the workflow.</p>
          </div>

          {/* Repository & Pull Request Selection */}
          <h2 className="faq-section-title">Repository & Pull Request Selection</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What am I selecting in this step?</h3>
            <p className="faq-answer">You select one or more repositories and associated pull requests that will be used as the basis for your work.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Can I select multiple pull requests?</h3>
            <p className="faq-answer">Yes. You may select multiple pull requests. You are responsible for managing your workload and completing each task thoroughly.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How should I choose a pull request?</h3>
            <p className="faq-answer">Choose pull requests that introduce meaningful behavior changes and require real technical judgment to evaluate. You should be comfortable understanding the codebase well enough to review and explain the changes.</p>
          </div>

          {/* Prompt Preparation */}
          <h2 className="faq-section-title">Prompt Preparation</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">Is the prompt the same thing as the pull request?</h3>
            <p className="faq-answer">No. The pull request defines what should change. The prompt defines how the model should implement those changes.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How detailed should my answers be?</h3>
            <p className="faq-answer">Be specific and concrete. Clearly describe current behavior, expected behavior, edge cases, and acceptance criteria. Avoid vague or high-level statements.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">What prompting style should I use?</h3>
            <p className="faq-answer">Use clear, direct, and structured instructions. Do not use role-based prompting or conversational language.</p>
          </div>

          {/* Execution & Platform Use */}
          <h2 className="faq-section-title">Execution & Platform Use</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">Can I use external LLMs or AI tools to help?</h3>
            <p className="faq-answer">No. Using external LLMs or AI tools to analyze code, write prompts, review outputs, or draft explanations is not allowed. All reasoning and evaluation must be your own.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Why do I see two model responses?</h3>
            <p className="faq-answer">Each execution turn produces two alternative outputs. You are expected to review both carefully, compare them, and select the stronger result.</p>
          </div>

          {/* Troubleshooting */}
          <h2 className="faq-section-title">Troubleshooting</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What should I do if something goes wrong?</h3>
            <p className="faq-answer">If you encounter an issue that is not covered in the dedicated tooling or CLI documentation, report it through the appropriate support channel with clear details about what happened and where it occurred.</p>
          </div>

        </div>
      </main>

      <footer className="videos-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FAQ;
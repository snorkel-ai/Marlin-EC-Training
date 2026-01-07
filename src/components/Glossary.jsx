import './Videos.css';
import './Content.css';

function Glossary({ onNavigate }) {
  return (
    <div className="videos-page">
      <header className="videos-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="videos-logo">Glossary</div>
      </header>
      
      <main className="videos-content">
        <h1 className="videos-title">Glossary</h1>
        <div className="content-body" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <div className="glossary-grid">

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Alias Email</h3>
              <p style={{ marginBottom: 0 }}>A project-specific email account used only to access required tools and platforms. Not for personal communication or external use.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Assessment</h3>
              <p style={{ marginBottom: 0 }}>The initial qualification step where you review model-generated Python code and explain whether the changes are correct, incomplete, or flawed.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Baseline Repository</h3>
              <p style={{ marginBottom: 0 }}>The original state of the codebase before any changes are generated during execution.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Blocking Issue</h3>
              <p style={{ marginBottom: 0 }}>A problem that makes a result unacceptable, such as broken logic, missing required changes, failing tests, or incorrect file placement.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Client Platform</h3>
              <p style={{ marginBottom: 0 }}>The environment where execution tasks are run and model outputs are reviewed.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Code of Conduct</h3>
              <p style={{ marginBottom: 0 }}>Rules governing professional behavior, confidentiality, and appropriate communication within the project.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Complexity Requirement</h3>
              <p style={{ marginBottom: 0 }}>The expectation that selected work is substantial enough to require planning, iteration, and technical judgment.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Context Setting</h3>
              <p style={{ marginBottom: 0 }}>The section where you explain what the codebase does and what the selected change is intended to accomplish.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Current Behavior</h3>
              <p style={{ marginBottom: 0 }}>How the code behaves before the intended changes are applied.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Dependency Setup</h3>
              <p style={{ marginBottom: 0 }}>Installing and configuring the tools and packages required to run the project locally.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Diff Review</h3>
              <p style={{ marginBottom: 0 }}>A file-by-file review of changes to confirm what was modified and whether it matches the intended behavior.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>EC (Expert Contributor)</h3>
              <p style={{ marginBottom: 0 }}>You — the participant responsible for reviewing code, writing prompts, evaluating outputs, and submitting final results.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Edge Case</h3>
              <p style={{ marginBottom: 0 }}>A non-standard scenario that the updated code must still handle correctly.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Expected Behavior</h3>
              <p style={{ marginBottom: 0 }}>How the code should behave after the intended changes are fully implemented.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Feedback Fields</h3>
              <p style={{ marginBottom: 0 }}>Where you compare model outputs, explain tradeoffs, and select the preferred result.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>File Structure Correctness</h3>
              <p style={{ marginBottom: 0 }}>Whether files were added or modified in the correct locations and follow expected project structure.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Initial Prompt</h3>
              <p style={{ marginBottom: 0 }}>The first structured instruction used to begin execution.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Iteration</h3>
              <p style={{ marginBottom: 0 }}>A cycle of refining instructions and reviewing outputs to improve correctness across turns.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Last-Mile Edits</h3>
              <p style={{ marginBottom: 0 }}>Small, limited cleanups made after review (for example: removing duplicates or minor naming fixes). Significant logic changes must be handled through iteration.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Local Environment</h3>
              <p style={{ marginBottom: 0 }}>Your machine setup used to run, test, and review the code.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Model Output (Option A / Option B)</h3>
              <p style={{ marginBottom: 0 }}>Two alternative outputs generated for the same prompt, which you review and compare before selecting one.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Non-Blocking Issue</h3>
              <p style={{ marginBottom: 0 }}>A minor problem that does not prevent correctness but should be noted.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Prompt Preparation</h3>
              <p style={{ marginBottom: 0 }}>The planning stage where you define expected behavior, edge cases, acceptance criteria, and the execution prompt.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Prompt Review Submission</h3>
              <p style={{ marginBottom: 0 }}>The final step where you select the best result, provide required details, and report issues if needed.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Task Approach</h3>
              <p style={{ marginBottom: 0 }}>Your written plan describing how the change should be implemented and validated.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Turn</h3>
              <p style={{ marginBottom: 0 }}>One execution cycle: you submit a prompt, review the model's outputs, and decide how to proceed.</p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>URL Requirement</h3>
              <p style={{ marginBottom: 0 }}>The requirement that the selected pull request link follows the correct format so the platform can track the task.</p>
            </div>

            

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Workflow Pipeline</h3>
              <p style={{ marginBottom: 0 }}>The full sequence of steps from assessment through selection, planning, execution, and final submission.</p>
            </div>

          </div>
        </div>
      </main>

      <footer className="videos-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Glossary;
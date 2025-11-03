import './Workbook.css';

function Workbook({ onNavigate }) {
  return (
    <div className="workbook-page">
      <header className="workbook-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="workbook-logo">CI Feedback Training</div>
      </header>
      
      <main className="workbook-content">
        <h1 className="workbook-title">CI Feedback Training</h1>
        <div className="workbook-intro">
          <p>
            CI checks are programmatic evaluations of task correctness and completeness. 
            You need to iterate on your task until all checks pass. This page provides a 
            practice workbook where you can do so, along with a video explaining the solution 
            and walking through how to iterate on CI feedback.
          </p>
          <p>
            <a 
              href="/Terminus-EC-Training/ci_feedback_training.ipynb" 
              download="ci_feedback_training.ipynb"
              className="notebook-download-link"
            >
              📓 Download CI Feedback Training Notebook
            </a>
          </p>
        </div>
        
        <div className="workbook-video-section">
          <div className="video-card">
            <h3 className="video-card-title">CI Feedback Training Tutorial</h3>
            <div className="video-wrapper">
              <iframe
                src="https://www.loom.com/embed/db35a5b03c1c43ab80f46f481fa02be1?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
                title="Practice Workbook Tutorial"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="workbook-checks-section">
          <h2>Automated Checks</h2>
          <p>The following automated checks are run on all submissions:</p>

          <h3>LLMAJ Checks</h3>
          <p>The following automated checks evaluate task quality and correctness:</p>

          <table>
            <thead>
              <tr>
                <th>Check Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>behavior_in_task_description</code></td>
                <td>Whether all behavior checked in tests is described in the task</td>
              </tr>
              <tr>
                <td><code>behavior_in_tests</code></td>
                <td>Whether all behavior described in task is checked in unit tests</td>
              </tr>
              <tr>
                <td><code>informative_test_docstrings</code></td>
                <td>Whether test cases have informative docstrings</td>
              </tr>
              <tr>
                <td><code>anti_cheating_measures</code></td>
                <td>Is it hard for the agent to cheat on the task?</td>
              </tr>
              <tr>
                <td><code>structured_data_schema</code></td>
                <td>If agent produces structured data, is exact schema described?</td>
              </tr>
              <tr>
                <td><code>hardcoded_solution</code></td>
                <td>Solution should demonstrate command sequence, not just output answer</td>
              </tr>
              <tr>
                <td><code>file_reference_mentioned</code></td>
                <td>If agent needs to produce a file, is filename mentioned in task.yaml?</td>
              </tr>
            </tbody>
          </table>

          <h3>CI Checks</h3>
          <p>The following automated checks validate technical requirements:</p>

          <table>
            <thead>
              <tr>
                <th>Check Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>pinned_dependencies</code></td>
                <td>Are external dependencies pinned to ensure reproducibility?</td>
              </tr>
              <tr>
                <td><code>typos</code></td>
                <td>Check for typos in file and variable names</td>
              </tr>
              <tr>
                <td><code>tests_or_solution_in_image</code></td>
                <td>Ensure tests/ folder or solution file not copied to image</td>
              </tr>
              <tr>
                <td><code>test_deps_in_image</code></td>
                <td>Test dependencies should be installed in run-tests.sh</td>
              </tr>
              <tr>
                <td><code>check_canary</code></td>
                <td>Checks if canary string is present at top of required files</td>
              </tr>
              <tr>
                <td><code>check_dockerfile_references</code></td>
                <td>Ensure solution/test files not referenced in Dockerfile</td>
              </tr>
              <tr>
                <td><code>check_run-tests_sh</code></td>
                <td>Verifies run-tests.sh uses uv init or has proper task.yaml keywords</td>
              </tr>
              <tr>
                <td><code>check_task_absolute_path</code></td>
                <td>Task instructions use absolute paths rather than relative paths</td>
              </tr>
              <tr>
                <td><code>check_privileged_containers</code></td>
                <td>No privileged containers in docker-compose.yaml</td>
              </tr>
              <tr>
                <td><code>ruff</code></td>
                <td>Lint checks</td>
              </tr>
              <tr>
                <td><code>check_task_sizes</code></td>
                <td>Every file is under 1MB</td>
              </tr>
              <tr>
                <td><code>validate_task_fields</code></td>
                <td>All required fields are present in task.yaml</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="workbook-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Workbook;


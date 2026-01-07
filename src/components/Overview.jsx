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
          <h2>About This Project</h2>
          <p>This project focuses on reviewing and executing Python code changes using real repositories and pull requests.</p>
          <p>Participants work with model-generated responses that attempt to modify existing code. The goal is to evaluate those changes, determine whether they correctly implement the intended behavior, and guide the model toward a correct and complete result.</p>
        </section>

        <section className="content-card-section">
          <h2>Workflow Structure</h2>
          <p>The workflow is structured as a sequence of practical steps. It begins with reviewing model-generated code to assess technical judgment. From there, participants select a repository and pull request that will serve as the basis for the task. They then plan the work by writing a prompt that clearly describes the expected changes, and use the provided tools to execute, review, and refine the results.</p>
        </section>

        <section className="content-card-section">
          <h2>What We Evaluate</h2>
          <p>At each stage, the focus is on concrete outcomes: whether the code behaves as intended, whether changes are complete and consistent, and whether technical decisions can be clearly explained. The project evaluates the ability to work through real codebases, reason about behavior, and make informed decisions when interacting with model-generated output.</p>
        </section>

        <section className="content-card-section">
          <h2>Getting Started</h2>
          <p>The guides below explain each step in detail and outline how to approach the work from initial review to final submission.</p>
        </section>

        <section className="content-card-section">
          <h2>Tutorial Videos</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>Step 1: Assessment</h3>
            <div style={{ position: 'relative', paddingBottom: '62.42774566473989%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/b45caf30507149bfb43d3cc20c4513ef" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>Step 2: Repository & Pull Request Selection</h3>
            <div style={{ position: 'relative', paddingBottom: '62.42774566473989%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/a212b65a295c4593bad11ac8bb94055e" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>Step 3: Prompt Preparation</h3>
            <div style={{ position: 'relative', paddingBottom: '56.84210526315789%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/2280f00825ec460e836575df2544aeb2" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>Step 4: Execution & Finalization</h3>
            <div style={{ position: 'relative', paddingBottom: '64.86161251504213%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/d368f4ece5d248a3af7ed53edca7ed20" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>CLI Tool Walkthrough</h3>
            <div style={{ position: 'relative', paddingBottom: '64.94708994708994%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/888ac13d11c24d1099f7ff6b6eaa334b" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>Multi-Turn Workflow</h3>
            <div style={{ position: 'relative', paddingBottom: '64.86%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.loom.com/embed/6537574a3bb64ee0aba07dcf2feca433" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </div>

        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Overview;
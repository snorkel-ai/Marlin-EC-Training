import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';
import './Content.css';
import './Workbook.css';
import './Videos.css';

function CollapsiblePhase({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="collapsible-phase">
      <button className="collapsible-phase-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="collapsible-phase-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="collapsible-phase-content">{children}</div>}
    </div>
  );
}

function LandingPage({ onNavigate, onLogout }) {
  const { hasRole } = useAuth();
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleZoomIn = () => setScale(s => Math.min(s + 0.25, 3));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.25, 0.5));
  const handleReset = () => { setScale(1); setPosition({ x: 0, y: 0 }); };
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };
  const handleMouseMove = (e) => {
    if (isDragging) setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleWheel = (e) => {
    e.preventDefault();
    setScale(s => e.deltaY < 0 ? Math.min(s + 0.1, 3) : Math.max(s - 0.1, 0.5));
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1e40af', letterSpacing: '-0.02em' }}>Snorkel</div>
            <div className="logo">Marlin Training Hub</div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#resources">Training Resources</a></li>
            <li><button onClick={() => onNavigate('glossary')} style={{ background: 'none', border: 'none', color: '#4b5563', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Glossary</button></li>
            <li><button onClick={() => onNavigate('faq')} style={{ background: 'none', border: 'none', color: '#4b5563', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>FAQ</button></li>
            {hasRole('swe') && (
              <li><button onClick={() => onNavigate('sweguidelines')} style={{ background: 'none', border: 'none', color: '#7c3aed', textDecoration: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>SWE Guidelines</button></li>
            )}
            {hasRole('generalist') && (
              <li><button onClick={() => onNavigate('generalistguidelines')} style={{ background: 'none', border: 'none', color: '#7c3aed', textDecoration: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Generalist Guidelines</button></li>
            )}
            {hasRole('admin') && (
              <li><button onClick={() => onNavigate('adminpanel')} style={{ background: 'none', border: 'none', color: '#dc2626', textDecoration: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Admin Panel</button></li>
            )}
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {hasRole('admin') && <span style={{ background: '#dc2626', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Admin</span>}
              {hasRole('swe') && <span style={{ background: '#2563eb', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>SWE</span>}
              {hasRole('generalist') && <span style={{ background: '#7c3aed', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Generalist</span>}
              <button onClick={onLogout} style={{ background: 'none', border: '1px solid #dc2626', color: '#dc2626', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="overview-section">
          <h2 className="section-title">Project Overview</h2>
          
          {/* Important Note */}
          <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginBottom: '1rem' }}>
            <p style={{ margin: 0, color: '#1e40af', fontWeight: 600 }}>
              📋 <strong>Important:</strong> For Prompt Review submissions, please use <strong>Marlin-Prompt-Review V2</strong> on the Snorkel platform.
            </p>
          </div>
          <div style={{ backgroundColor: '#fee2e2', padding: '0.75rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '2rem' }}>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🔄 <strong>Minimum 3 turns required.</strong> All submissions must include at least three turns of iteration with the model.
            </p>
          </div>

          <p className="overview-intro">We're excited to welcome you to Project Marlin, an initiative focused on advancing AI-assisted software engineering through high-quality Python development and structured collaboration with state-of-the-art AI models.</p>

          {/* Workflow SVG image with zoom/pan */}
          <div style={{ width: '100%', maxWidth: '1200px', margin: '2rem auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <button onClick={handleZoomOut} style={{ padding: '0.5rem 1rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>−</button>
              <button onClick={handleReset} style={{ padding: '0.5rem 1rem', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}>Reset ({Math.round(scale * 100)}%)</button>
              <button onClick={handleZoomIn} style={{ padding: '0.5rem 1rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>+</button>
            </div>
            <div ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onWheel={handleWheel} style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default', backgroundColor: '#f8fafc' }}>
              <img src={`${import.meta.env.BASE_URL}media/images/Workflow.svg`} alt="Project Marlin Workflow" draggable={false} style={{ width: '100%', display: 'block', transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`, transformOrigin: 'center center', transition: isDragging ? 'none' : 'transform 0.1s ease-out' }} />
            </div>
            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>Use scroll wheel to zoom • Drag to pan when zoomed in</p>
          </div>

          {/* Step 1: Assessment */}
          <CollapsiblePhase title="Step 1: Assessment">
            <div className="phase-item">
              <p>This step evaluates your ability to review Python code changes critically.</p>
              <p>You'll be given a repository and a set of changes generated by a model. Your task is to assess whether those changes are correct, incomplete, or flawed, and explain your reasoning clearly.</p>
              <p>We're looking for careful analysis, attention to detail, and clear technical explanations — not generic answers or over-reliance on automated tools.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '62.42774566473989%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/b45caf30507149bfb43d3cc20c4513ef" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 2: Repository & Pull Request Selection */}
          <CollapsiblePhase title="Step 2: Repository & Pull Request Selection">
            <div className="phase-item">
              <p>In this step, you select the repository and pull request you'll work on for the remainder of the workflow.</p>
              <p>You'll review available options, inspect the codebase, and choose a pull request that introduces meaningful behavior changes. The task should require real engineering judgment and should be complex enough to warrant careful planning and iteration.</p>
              <p>Choose work you can reasonably understand and evaluate. A strong selection has clear intent but non-trivial implementation details.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '62.42774566473989%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/a212b65a295c4593bad11ac8bb94055e" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 3: Prompt Preparation */}
          <CollapsiblePhase title="Step 3: Prompt Preparation">
            <div className="phase-item">
              <p>Before running any tools, you plan the work.</p>
              <p>You'll describe what the repository does, what the pull request is intended to change, and write a prompt that will guide the model in implementing those changes using the CLI tool.</p>
              <p>The goal of this step is to remove ambiguity and define a prompt that clearly describes the expected outcome.</p>
              <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
                <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
                  🚫 <strong>Do not use role-based prompting.</strong> Avoid phrases like "You are a senior software engineer..." or "Act as an expert developer...". Write clear, direct instructions that describe exactly what needs to be done.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '56.84210526315789%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/2280f00825ec460e836575df2544aeb2" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 4: Execution & Finalization */}
          <CollapsiblePhase title="Step 4: Execution & Finalization">
            <div className="phase-item">
              <p>This is where the planned work is carried out.</p>
              <p>You'll run the task using the provided tools, review the generated changes, and iterate as needed until the result matches your intent. You'll compare multiple outputs, discard incorrect approaches, and refine the solution across turns.</p>
              <p>Once complete, you'll select the stronger of the two model responses and submit your work for review.</p>
              <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginTop: '1rem' }}>
                <p style={{ margin: 0, color: '#1e40af', fontWeight: 500 }}>
                  📋 <strong>Note:</strong> For final submission, use <strong>Marlin-Prompt-Review V2</strong> on the Snorkel platform.
                </p>
              </div>
              <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginTop: '1rem' }}>
                <p style={{ margin: 0, marginBottom: '0.5rem', color: '#92400e', fontWeight: 600 }}>
                  ⚠️ <strong>Important:</strong> Do not check out the PR branch (e.g. <code style={{ backgroundColor: '#fde68a', padding: '0.125rem 0.375rem', borderRadius: '4px' }}>pr-833</code>) when working on a Marlin submission. PR branches already contain the requested changes.
                </p>
                <p style={{ margin: 0, color: '#92400e' }}>
                  Always use the pre-PR repository state provided in the approval email after Prompt-Preparation. If you're unsure you're on the correct version, ask in Slack before proceeding.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '64.86161251504213%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/d368f4ece5d248a3af7ed53edca7ed20" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          <p className="overview-closing">Thank you for being part of the Snorkel Expert community. We look forward to working with you as we push the boundaries of AI-assisted software engineering through Project Marlin.</p>

          <h2 className="section-title">Guidelines</h2>
          <div className="resource-buttons">
            <button className="resource-button" onClick={() => onNavigate('overview')}><span className="button-text">Overview</span><span className="button-description">Provides a high-level explanation of the project, how the full workflow fits together.</span></button>
            <button className="resource-button" onClick={() => onNavigate('prselection')}><span className="button-text">Step 2: PR Selection</span><span className="button-description">Covers how to choose a valid repository and pull request with the right level of complexity.</span></button>
            <button className="resource-button" onClick={() => onNavigate('promptpreparation')}><span className="button-text">Step 3: Prompt Preparation</span><span className="button-description">Explains how to outline expected behavior, edge cases, tests, and write a strong prompt.</span></button>
            <button className="resource-button" onClick={() => onNavigate('modelworkspace')}><span className="button-text">Step 4: CLI and Final Submission</span><span className="button-description">Shows how to run the model, iterate across turns, review updates, and finalize your submission. Use Marlin-Prompt-Review V2.</span></button>
            <button className="resource-button" onClick={() => onNavigate('rulesandrequirements')}><span className="button-text">Rules & Requirements</span><span className="button-description">Details OS requirements, allowed tools, time limits, and project policies you must follow.</span></button>
            <button className="resource-button" onClick={() => onNavigate('cli')}><span className="button-text">CLI Setup</span><span className="button-description">How to setup the CLI tool to start tasking.</span></button>
          </div>
        </section>

        <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '3rem', paddingTop: '2rem' }}>
          <section id="resources" className="resources-section">
            <h2 className="section-title">Training Resources</h2>
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '1.5rem', textAlign: 'center' }}>Resources Hub</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">☕ Essential Resources</h4>
                    <ul className="resource-hub-list">
                      <li><a href="https://experts.snorkel-ai.com/" target="_blank" rel="noopener noreferrer">Snorkel Expert Platform</a></li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">PR Suggestion Form</a></li>
                    </ul>
                  </div>
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">❓ Need Help?</h4>
                    <ul className="resource-hub-list">
                      <li><a href="https://snorkel-team.enterprise.slack.com/archives/C0A1GKLJQVA" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 600 }}>#ec-marlin-support-v2</a> — Slack channel for project questions</li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">Marlin Issue Tracker</a> — Report platform problems</li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">PR Suggestion Form</a> — Suggest repos/PRs</li>
                      <li><a href="https://snorkel.freshdesk.com/support/tickets/new" target="_blank" rel="noopener noreferrer">Expert Support Ticket</a> — General support</li>
                    </ul>
                  </div>
                </div>
                <div className="resource-hub-card" style={{ marginBottom: '2rem' }}>
                  <h4 className="resource-hub-card-title">📰 Updates</h4>
                  <div style={{ color: '#64748b' }}><p style={{ margin: '0.5rem 0' }}><strong>December 3rd:</strong> #ec-marlin-support-v2 launched!</p></div>
                </div>
                <CollapsiblePhase title="Code of Conduct">
                  <div className="phase-item">
                    <p>It is important to the Snorkel team that our communication channels remain a safe, professional, and welcoming environment for all Expert Contributors (ECs) and Snorkel staff.</p>
                    <p><strong>We are dedicated to the following:</strong></p>
                    <ul>
                      <li>Maintaining respectful and professional relations with Snorkel staff and other ECs.</li>
                      <li>No threats toward Snorkel staff or other ECs—these will not be tolerated.</li>
                      <li>No use of profane or obscene comments directed at others.</li>
                      <li><strong>Do not share this project information with anyone outside the project.</strong></li>
                    </ul>
                    <p>The purpose of this Code of Conduct is not to prevent ECs from expressing concerns or dissatisfaction. If something feels wrong, we encourage you to report it in a respectful manner aligned with the community ethos.</p>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '1rem' }}>Violations will be addressed privately. Persistent violations may result in revoked Slack access or offboarding from Snorkel work.</p>
                  </div>
                </CollapsiblePhase>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
                <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)', width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>Onboarding Session</h3>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>Onboarding Video</h4>
                    <div style={{ position: 'relative', paddingBottom: '53.60262008733624%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe src="https://www.loom.com/embed/82f96f08bc964f54829703971ea81b2f" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
                <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)', width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>Tutorial</h3>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>CLI Tool Walkthrough</h4>
                    <div style={{ position: 'relative', paddingBottom: '64.94708994708994%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe src="https://www.loom.com/embed/888ac13d11c24d1099f7ff6b6eaa334b" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>Multi-Turn Workflow</h4>
                    <div style={{ position: 'relative', paddingBottom: '64.86%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe src="https://www.loom.com/embed/6537574a3bb64ee0aba07dcf2feca433" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
import { useState } from 'react';
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
            <li><a href="#resources">Resources Hub</a></li>
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

          {/* Overview Content */}
          <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.375rem', fontWeight: 600, color: '#334155' }}>About This Project</h3>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>This project focuses on reviewing and executing Python code changes using real repositories and pull requests.</p>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>Participants work with model-generated responses that attempt to modify existing code. The goal is to evaluate those changes, determine whether they correctly implement the intended behavior, and guide the model toward a correct and complete result.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.375rem', fontWeight: 600, color: '#334155' }}>What We Evaluate</h3>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>At each stage, the focus is on concrete outcomes: whether the code behaves as intended, whether changes are complete and consistent, and whether technical decisions can be clearly explained. The project evaluates the ability to work through real codebases, reason about behavior, and make informed decisions when interacting with model-generated output.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.375rem', fontWeight: 600, color: '#334155' }}>Workflow Structure</h3>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>The workflow is structured as a sequence of practical steps:</p>
            <ol style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li>Complete an assessment to gain access to tasking (one-time)</li>
              <li>Select a repository and pull request that will serve as the basis for the task</li>
              <li>Plan the work by writing a prompt that clearly describes the expected changes</li>
              <li>Go to the provider platform and set up your CLI tool (one-time)</li>
              <li>Use the CLI tool to create your PR</li>
              <li>Return to the Snorkel Expert Platform to claim, edit, and finalize your task</li>
            </ol>
          </div>

          {/* Workflow image */}
          <div style={{ width: '100%', maxWidth: '80vw', margin: '2rem auto' }}>
            <div style={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
              <img src={`${import.meta.env.BASE_URL}media/images/workflow-v2.png`} alt="Project Marlin Workflow" style={{ width: '100%', display: 'block' }} />
            </div>
            <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.875rem', marginTop: '0.75rem' }}>Blue boxes correspond to distinct projects on the Snorkel Expert Platform</p>
          </div>
>>>>>>> 20db0ae (Update landing page: restructure workflow, add videos, update guidelines)

          {/* Step 1: Assessment */}
          <CollapsiblePhase title={
            <>
              Step 1: Assessment{' '}
              <span style={{ fontSize: '0.85em', fontWeight: 400, color: '#64748b', fontFamily: 'monospace' }}>(Marlin-Expert_Assessment-2)</span>
            </>
          }>
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
          <CollapsiblePhase title={
            <>
              Step 2: Repository & Pull Request Selection{' '}
              <span style={{ fontSize: '0.85em', fontWeight: 400, color: '#64748b', fontFamily: 'monospace' }}>(Marlin-PR-Selection)</span>
            </>
          }>
            <div className="phase-item">
              <p>In this step, you select the repository and pull request you'll work on for the remainder of the workflow.</p>
              <p>You'll review available options, inspect the codebase, and choose a pull request that introduces meaningful behavior changes. The task should require real engineering judgment and should be complex enough to warrant careful planning and iteration.</p>
              <p>Choose work you can reasonably understand and evaluate. A strong selection has clear intent but non-trivial implementation details.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <button 
                    onClick={() => onNavigate('prselection')}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                  >
                    View additional guidance →
                  </button>
                </p>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '62.42774566473989%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/a212b65a295c4593bad11ac8bb94055e" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 3: Prompt Preparation */}
          <CollapsiblePhase title={
            <>
              Step 3: Prompt Preparation{' '}
              <span style={{ fontSize: '0.85em', fontWeight: 400, color: '#64748b', fontFamily: 'monospace' }}>(Marlin-Prompt-Prep)</span>
            </>
          }>
            <div className="phase-item">
              <p>Before running any tools, you plan the work.</p>
              <p>You'll describe what the repository does, what the pull request is intended to change, and write a prompt that will guide the model in implementing those changes using the CLI tool.</p>
              <p>The goal of this step is to remove ambiguity and define a prompt that clearly describes the expected outcome.</p>
              <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
                <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
                  🚫 <strong>Do not use role-based prompting.</strong> Avoid phrases like "You are a senior software engineer..." or "Act as an expert developer...". Write clear, direct instructions that describe exactly what needs to be done.
                </p>
                <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
                  🚫 <strong>Do not use LLMs</strong> Avoid using any LLMs during the creation of the prompt or during any stage in general.
                </p>
                 <p style={{ margin: 0, color: '#991b1b', fontWeight: 600 }}>
              🚫 <strong>Do not reference the PR in your prompt.</strong> You need to imagine yourself as the developer who was originally building this PR. You cannot reference the PR that already exists to explain how to build it — write instructions as if the PR does not exist yet.
            </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <button 
                    onClick={() => onNavigate('promptpreparation')}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                  >
                    View additional guidance →
                  </button>
                </p>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ position: 'relative', paddingBottom: '56.84210526315789%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe src="https://www.loom.com/embed/2280f00825ec460e836575df2544aeb2" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 4: CLI Setup */}
          <CollapsiblePhase title="Step 4: CLI Setup (one-time)">
            <div className="phase-item">
              <p>Before you can execute tasks in Step 5, you need to set up the CLI tool on your system.</p>
              <p>The CLI tool requires several system components and dependencies to be properly configured. This includes adding VS Code to your PATH, installing required dependencies like tmux, and preparing your repository for task execution.</p>
              <p style={{ marginTop: '1rem' }}>
                <button 
                  onClick={() => onNavigate('cli')}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                  View Full CLI Setup Guide →
                </button>
              </p>
            </div>
          </CollapsiblePhase>

          {/* Step 5: PR Creation */}
          <CollapsiblePhase title={
            <>
              Step 5: PR Creation{' '}
              <span style={{ fontSize: '0.85em', fontWeight: 400, color: '#64748b', fontFamily: 'monospace' }}>(CLI)</span>
            </>
          }>
            <div className="phase-item">
              <p>This is where the planned work is carried out.</p>
              <p>You'll run the task using the provided tools, review the generated changes, and iterate as needed until the result matches your intent. You'll compare multiple outputs, discard incorrect approaches, and refine the solution across turns.</p>
              <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginTop: '1rem' }}>
                <p style={{ margin: 0, marginBottom: '0.5rem', color: '#92400e', fontWeight: 600 }}>
                  ⚠️ <strong>Important:</strong> Do not check out the PR branch (e.g. <code style={{ backgroundColor: '#fde68a', padding: '0.125rem 0.375rem', borderRadius: '4px' }}>pr-833</code>) when working on a Marlin submission. PR branches already contain the requested changes.
                </p>
                <p style={{ margin: 0, color: '#92400e' }}>
                  Always use the pre-PR repository state provided in the approval email after Prompt-Preparation. If you're unsure you're on the correct version, ask in Slack before proceeding.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <button 
                    onClick={() => onNavigate('modelworkspace')}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                  >
                    View additional guidance →
                  </button>
                </p>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <video controls style={{ width: '100%', display: 'block' }}>
                    <source src={`${import.meta.env.BASE_URL}media/videos/CLI.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          {/* Step 6: PR Submission */}
          <CollapsiblePhase title={
            <>
              Step 6: PR Submission{' '}
              <span style={{ fontSize: '0.85em', fontWeight: 400, color: '#64748b', fontFamily: 'monospace' }}>(Marlin-Prompt-Review-V2)</span>
            </>
          }>
            <div className="phase-item">
              <p>Once your CLI work is complete, you'll submit your work for review using the Marlin-Prompt-Review V2 task on the Snorkel platform.</p>
              <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginTop: '1rem' }}>
                <p style={{ margin: 0, color: '#1e40af', fontWeight: 500 }}>
                  📋 <strong>Note:</strong> For final submission, use <strong>Marlin-Prompt-Review V2</strong> on the <strong>Snorkel platform</strong>, not <strong>Marlin-Prompt-Review</strong> as shown in the video below.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Tutorial Video</h4>
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <video controls style={{ width: '100%', display: 'block' }}>
                    <source src={`${import.meta.env.BASE_URL}media/videos/PromptReview.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </CollapsiblePhase>

          <p className="overview-closing">Thank you for being part of the Snorkel Expert community. We look forward to working with you as we push the boundaries of AI-assisted software engineering through Project Marlin.</p>

          <h2 className="section-title">Guidelines</h2>
          <div className="resource-buttons">
            <button className="resource-button" onClick={() => onNavigate('rulesandrequirements')}><span className="button-text">Rules & Requirements</span><span className="button-description">Details OS requirements, allowed tools, time limits, and project policies you must follow.</span></button>
          </div>
        </section>

        <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '3rem', paddingTop: '2rem' }}>
          <section id="resources" className="resources-section">
            <h2 className="section-title">Resources Hub</h2>
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{ marginTop: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">☕ Essential Resources</h4>
                    <ul className="resource-hub-list">
                      <li><a href="https://expert.snorkel.ai" target="_blank" rel="noopener noreferrer">Snorkel Expert Platform</a></li>
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
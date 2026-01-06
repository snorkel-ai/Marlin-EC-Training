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
      <button
        className="collapsible-phase-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="collapsible-phase-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="collapsible-phase-content">{children}</div>}
    </div>
  );
}

function LandingPage({ onNavigate, onLogout }) {
  const { hasRole } = useAuth();
  
  // Image viewer state
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
    if (isDragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale(s => Math.min(s + 0.1, 3));
    } else {
      setScale(s => Math.max(s - 0.1, 0.5));
    }
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
            
            {/* SWE-only nav item */}
            {hasRole('swe') && (
              <li>
                <button 
                  onClick={() => onNavigate('sweguidelines')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#7c3aed', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    fontSize: '1rem', 
                    fontFamily: 'inherit' 
                  }}
                >
                  SWE Guidelines
                </button>
              </li>
            )}
            
            {/* Generalist-only nav item */}
            {hasRole('generalist') && (
              <li>
                <button 
                  onClick={() => onNavigate('generalistguidelines')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#7c3aed', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    fontSize: '1rem', 
                    fontFamily: 'inherit' 
                  }}
                >
                  Generalist Guidelines
                </button>
              </li>
            )}

            {/* Admin-only nav item */}
            {hasRole('admin') && (
              <li>
                <button 
                  onClick={() => onNavigate('adminpanel')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#dc2626', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    fontSize: '1rem', 
                    fontFamily: 'inherit' 
                  }}
                >
                  Admin Panel
                </button>
              </li>
            )}

            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Role badges - can show multiple */}
              {hasRole('admin') && (
                <span style={{
                  background: '#dc2626',
                  color: '#ffffff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  Admin
                </span>
              )}
              {hasRole('swe') && (
                <span style={{
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  SWE
                </span>
              )}
              {hasRole('generalist') && (
                <span style={{
                  background: '#7c3aed',
                  color: '#ffffff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  Generalist
                </span>
              )}
              
              <button 
                onClick={onLogout}
                style={{
                  background: 'none',
                  border: '1px solid #dc2626',
                  color: '#dc2626',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="overview-section">
          <h2 className="section-title">Project Overview</h2>

          <p className="overview-intro">We're excited to welcome you to Project Marlin, an initiative focused on advancing AI-assisted software engineering through high-quality Python development and structured collaboration with state-of-the-art AI models.</p>

          {/* Workflow SVG image with zoom/pan */}
          <div style={{ width: '100%', maxWidth: '1200px', margin: '2rem auto' }}>
            {/* Zoom controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <button 
                onClick={handleZoomOut}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                −
              </button>
              <button 
                onClick={handleReset}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}
              >
                Reset ({Math.round(scale * 100)}%)
              </button>
              <button 
                onClick={handleZoomIn}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                +
              </button>
            </div>
            
            {/* Image container */}
            <div 
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              style={{ 
                overflow: 'hidden', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0',
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                backgroundColor: '#f8fafc'
              }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}media/images/Workflow.svg`} 
                alt="Project Marlin Workflow"
                draggable={false}
                style={{ 
                  width: '100%', 
                  display: 'block',
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              />
            </div>
            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Use scroll wheel to zoom • Drag to pan when zoomed in
            </p>
          </div>

          <CollapsiblePhase title="Step 1: Assessment">
            <div className="phase-item">
              <p>This step checks whether you're ready to participate.</p>
              <ul>
                <li>You'll complete an initial assessment on the <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 500 }}>Snorkel platform</a>.</li>
                <li>Your submission is reviewed for quality and understanding.</li>
                <li>If you pass, you move on.</li>
                <li>If you don't pass, you'll be offboarded and won't continue.</li>
              </ul>
              <p style={{ fontWeight: 600, color: '#1e40af', marginTop: '1rem' }}>Only ECs who pass this step can move forward.</p>
            </div>
          </CollapsiblePhase>

          <CollapsiblePhase title="Step 2: Prompt Prep (PR Selection & Planning)">
            <div className="phase-item">
              <p>In this step, you choose a PR and plan your work — you are not working in the client tools yet.</p>
              
              <h4>What you do</h4>
              <ul>
                <li>Select a repository and PR from a curated list in Prompt Prep.</li>
                <li>Submit a planning write-up explaining how you would complete the task.</li>
              </ul>

              <h4>Your submission includes:</h4>
              <ul>
                <li>What the repository does</li>
                <li>What the PR is trying to change</li>
                <li>Current vs. expected behavior</li>
                <li>Important edge cases</li>
                <li>Files you expect to touch</li>
                <li>How you would test the change</li>
                <li>A draft prompt you would use with the model</li>
                <li>An estimate of effort and complexity</li>
              </ul>

              <h4>What happens next</h4>
              <ul>
                <li>We review your submission for quality and originality.</li>
                <li>If approved, you'll receive an email giving you permission to continue.</li>
                <li>If it's low quality, you may be asked to revise.</li>
                <li>Repeated low-quality submissions may lead to offboarding.</li>
              </ul>

              <p style={{ fontWeight: 600, color: '#1e40af', marginTop: '1rem' }}>This step makes sure you have a solid plan before doing the actual task.</p>
            </div>
          </CollapsiblePhase>

          <CollapsiblePhase title="Step 3: CLI Task & Final Review">
            <div className="phase-item">
              <p>Once your Prompt Prep submission is approved, you can complete the real task.</p>
              
              <h4>What you do</h4>
              <ul>
                <li>Use the client's CLI tool to guide the model in producing a production-ready PR.</li>
                <li>Work in the CLI until the task is complete.</li>
                <li>Return to the <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 500 }}>Snorkel platform</a> and submit a Prompt Review:</li>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Confirm the task is complete</li>
                  <li>Link the PR you worked on</li>
                  <li>Confirm it matches what you planned in Step 2</li>
                </ul>
              </ul>

              <h4>What happens next</h4>
              <ul>
                <li>We review your submission for quality and spam.</li>
                <li>Approved submissions complete the process.</li>
              </ul>
            </div>
          </CollapsiblePhase>

          <p className="overview-closing">Thank you for being part of the Snorkel Expert community. We look forward to working with you as we push the boundaries of AI-assisted software engineering through Project Marlin.</p>

           <h2 className="section-title">Guidelines</h2>

            <div className="resource-buttons">
              <button className="resource-button" onClick={() => onNavigate('overview')}>
                <span className="button-text">Overview</span>
                <span className="button-description">Provides a high-level explanation of Phase 3 & 4 and how the full workflow fits together.</span>
              </button>
              <button className="resource-button" onClick={() => onNavigate('prselection')}>
                <span className="button-text">PR Selection</span>
                <span className="button-description">Covers how to choose a valid repository and pull request with the right level of complexity.</span>
              </button>
              <button className="resource-button" onClick={() => onNavigate('promptpreparation')}>
                <span className="button-text">Prompt Preparation</span>
                <span className="button-description">Explains how to outline expected behavior, edge cases, tests, and write a strong prompt.</span>
              </button>
              <button className="resource-button" onClick={() => onNavigate('modelworkspace')}>
                <span className="button-text">Model Workspace</span>
                <span className="button-description">Shows how to run the model, iterate across turns, review updates, and finalize your submission.</span>
              </button>
              <button className="resource-button" onClick={() => onNavigate('rulesandrequirements')}>
                <span className="button-text">Rules & Requirements</span>
                <span className="button-description">Details OS requirements, allowed tools, time limits, and project policies you must follow.</span>
              </button>
               <button className="resource-button" onClick={() => onNavigate('cli')}>
                <span className="button-text">CLI Setup</span>
                <span className="button-description">How to setup the CLI tool to start tasking.</span>
              </button>
            </div>

        </section>

        <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '3rem', paddingTop: '2rem' }}>
          <section id="resources" className="resources-section">
            <h2 className="section-title">Training Resources</h2>
            <div style={{ width: '100%', marginBottom: '2rem' }}>

              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '1.5rem', textAlign: 'center' }}>
                  🐟 Phase 3 & 4 Resources Hub
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

                  {/* Essential Resources Card */}
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">☕ Essential Resources</h4>
                    <ul className="resource-hub-list">
                      <li><a href="https://expert.snorkel.ai" target="_blank" rel="noopener noreferrer">Snorkel Expert Platform</a></li>
                      <li><a href="https://snorkelai.box.com/s/vmz4anv385k09v4cix4qi232fitnx8i8" target="_blank" rel="noopener noreferrer">Project Phases Overview</a></li>
                      <li><a href="https://app.excalidraw.com/l/1UKEa5PGBzD/3mwwSL3RRB9" target="_blank" rel="noopener noreferrer">Project Phases Visual Diagram</a></li>
                      <li><a href="https://docs.google.com/document/d/1jlH-ixP13eb04uUu9aAXmjlSzMX_90DEJzMyszfPRd0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Phase 3 & 4 Guidelines</a></li>
                      <li><a href="#resources">Phase 3 & 4 Onboarding Slides (TBA)</a></li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">PR Suggestion Form</a></li>
                    </ul>
                  </div>

                  {/* Phase Info Card */}
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">📋 Phase Breakdown</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: '#1e40af' }}>Phase 3:</strong>
                      <p style={{ margin: '0.25rem 0 0.75rem', color: '#64748b', fontSize: '0.95rem' }}>
                        Complete Marlin-PR-Selection and Marlin-Prompt-Preparation on the Expert platform to practice before the final task.
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: '#1e40af' }}>Phase 4:</strong>
                      <p style={{ margin: '0.25rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                        Proceed to the CLI Tool to submit tasks on the platform.
                      </p>
                    </div>
                  </div>

                  {/* Support Card */}
                  <div className="resource-hub-card">
                    <h4 className="resource-hub-card-title">❓ Need Help?</h4>
                    <ul className="resource-hub-list">
                      <li><a href="https://snorkel-team.enterprise.slack.com/archives/C0A1GKLJQVA" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 600 }}>#ec-marlin-support-v2</a> — Slack channel for project questions</li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">Marlin Issue Tracker</a> — Report platform problems</li>
                      <li><a href="https://snorkel-team.enterprise.slack.com/docs/TFHL9C8JG/F0A1J0370E8" target="_blank" rel="noopener noreferrer">PR Suggestion Form</a> — Suggest repos/PRs</li>
                      <li><a href="mailto:hr@hireart.com">HR/Payroll Support</a> — hr@hireart.com</li>
                      <li><a href="https://snorkel.freshdesk.com/support/tickets/new" target="_blank" rel="noopener noreferrer">Expert Support Ticket</a> — General support</li>
                    </ul>
                  </div>

                </div>

                {/* Updates Section */}
                <div className="resource-hub-card" style={{ marginBottom: '2rem' }}>
                  <h4 className="resource-hub-card-title">📰 Updates</h4>
                  <div style={{ color: '#64748b' }}>
                    <p style={{ margin: '0.5rem 0' }}><strong>December 3rd:</strong> #ec-marlin-support-v2 launched!</p>
                  </div>
                </div>

                {/* Slack Code of Conduct */}
                <CollapsiblePhase title="Code of Conduct">
                  <div className="phase-item">
                    <p>
                      It is important to the Snorkel team that our communication channels remain a safe, professional,
                      and welcoming environment for all Expert Contributors (ECs) and Snorkel staff.
                    </p>

                    <p><strong>We are dedicated to the following:</strong></p>
                    <ul>
                      <li>Maintaining respectful and professional relations with Snorkel staff and other ECs.</li>
                      <li>No threats toward Snorkel staff or other ECs—these will not be tolerated.</li>
                      <li>No use of profane or obscene comments directed at others.</li>
                      <li>
                        <strong>Do not share this project information with anyone outside the project.</strong>
                      </li>
                    </ul>

                    <p>
                      The purpose of this Code of Conduct is not to prevent ECs from expressing concerns or dissatisfaction.
                      If something feels wrong, we encourage you to report it in a respectful manner aligned with the
                      community ethos.
                    </p>

                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '1rem' }}>
                      Violations will be addressed privately. Persistent violations may result in revoked Slack access
                      or offboarding from Snorkel work.
                    </p>
                  </div>
                </CollapsiblePhase>

              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {/* Onboarding Session 1 Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                  width: '100%'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
                    Onboarding Session 1
                  </h3>

                  <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <a
                      href="https://docs.google.com/document/d/1jlH-ixP13eb04uUu9aAXmjlSzMX_90DEJzMyszfPRd0/edit?tab=t.dos1l1i9606y#heading=h.lx0ka1j213ku"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#ffffff',
                        color: '#1e40af',
                        padding: '0.875rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      View Phase 3 & 4 Guidelines
                    </a>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>
                      Onboarding Video
                    </h4>
                    <div className="video-wrapper">
                      <video
                        controls
                        preload="metadata"
                        className="video-iframe"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      >
                        <source src={`${import.meta.env.BASE_URL}media/videos/video.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboarding Session 2 Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                  width: '100%'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
                   Tutorial
                  </h3>

                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>
                      CLI Tool Walkthrough
                    </h4>
                    <div style={{ position: 'relative', paddingBottom: '64.94708994708994%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe
                        src="https://www.loom.com/embed/888ac13d11c24d1099f7ff6b6eaa334b"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>
                      Multi-Turn Workflow
                    </h4>
                    <div style={{ position: 'relative', paddingBottom: '64.86%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe
                        src="https://www.loom.com/embed/6537574a3bb64ee0aba07dcf2feca433"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                      />
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
import './LandingPage.css';
import './Content.css';
import './Workbook.css';
import './Videos.css';

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1e40af', letterSpacing: '-0.02em' }}>Snorkel</div>
            <div className="logo">Terminus Training Hub</div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><button onClick={() => onNavigate('glossary')} style={{ background: 'none', border: 'none', color: '#4b5563', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Glossary</button></li>
            <li><button onClick={() => onNavigate('faq')} style={{ background: 'none', border: 'none', color: '#4b5563', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>FAQ</button></li>
          </ul>
        </nav>
      </header>

      <div className="announcement-banner">
        <p className="announcement-text">PLEASE DO NOT REACH OUT TO REVIEWERS DIRECTLY.<br />Reviews will be performed ASAP and messaging them will not increase the speed at which your submission is reviewed.</p>
      </div>


      <main className="main-content">
        <section className="overview-section">
          <h2 className="section-title">Project Overview</h2>
          <p>
            This project aims to develop a high-quality dataset in the style of Terminal-Bench. 
            Terminal-Bench is a suite of multi-step agentic tasks executed in a Command-Line Interface (CLI) 
            environment, designed to benchmark the performance of models. Your role is to develop a task, solution, and associated tests to verify the solution. These 
            should be quite difficult, targeting an accuracy of below 80% for GPT-5 or Sonnet 4.5.
          </p>
          
          <table>
            <thead>
              <tr>
                <th>Difficulty Level</th>
                <th>Hard</th>
                <th>Medium</th>
                <th>Easy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Accuracy Threshold</strong></td>
                <td>&lt; 40%</td>
                <td>&lt; 60%</td>
                <td>&lt; 80%</td>
              </tr>
            </tbody>
          </table>

          <p>
            You will create the task locally, validate that it meets all project criteria, and then package 
            it as part of your submissions. Each submission undergoes independent review by another qualified 
            coding expert with experience in the corresponding practice area to ensure accuracy and completeness.
          </p>
          
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #1e40af', padding: '1rem 1.5rem', marginTop: '1.5rem', borderRadius: '4px' }}>
            <p style={{ margin: 0, color: '#1e40af' }}>
              <strong>Estimated Time:</strong> We expect submission tasks to take 2-5 hours based on task difficulty.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p className="hero-subtitle">Slack for all project-related questions: <strong>#ec-terminus-submission</strong></p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://docs.google.com/spreadsheets/d/1TQdHPhEb8PrtSOH1PC71120jhBuXQVQWVugqgz3IbY0/edit?gid=364067552#gid=364067552&range=A30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="overview-link"
              >
                📋 Task Idea Sheet
              </a>
            </div>
          </div>
        </section>

        <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '3rem', paddingTop: '2rem' }}>
          <section className="resources-section">
            <h2 className="section-title">Training Resources</h2>
          <div style={{ textAlign: 'center', width: '100%', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'left', display: 'inline-block', color: '#475569', lineHeight: '1.6' }}>
              <strong>We recommend completing the training resources in the following order:</strong>
              <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '1rem' }}><strong>Before Beginning:</strong> Familiarize yourself with Terminal-Bench and its existing tasks <a href="https://www.tbench.ai/registry/terminal-bench-core/0.1.1" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline' }}>here</a>. Our project, while not a direct contribution to Terminal-Bench, will mimic the style closely.</li>
                <li style={{ marginBottom: '1rem' }}>Begin with the onboarding materials appropriate for how you've been onboarded (either Expert Platform or GitHub onboarding materials)
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    <li>Reach out to Puyun or Connor if unsure of your onboarding method</li>
                  </ul>
                </li>
                <li style={{ marginBottom: '1rem' }}>Review the appropriate submission walkthrough (Expert Platform or GitHub Submission Walkthrough)</li>
                <li style={{ marginBottom: '1rem' }}>Complete the OracleAgent training to learn how to validate your solutions</li>
                <li style={{ marginBottom: '1rem' }}>Complete the CI Feedback training to understand the automated CI and quality checks that run on your submissions</li>
                <li style={{ marginBottom: '1rem' }}>Review the local testing information to learn to run the automated checks locally to enable faster iteration</li>
              </ol>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                borderRadius: '12px', 
                padding: '2rem', 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                width: '100%'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Expert Platform Onboarding Materials
                </h3>
                
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <a 
                    href="/Terminus-EC-Training/Terminus%20EC%20Onboarding%20-%20Platform.pdf" 
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
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    View/Download Onboarding Slides
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
                      onError={(e) => {
                        console.error('Video load error:', e);
                        console.error('Video src:', e.target.currentSrc);
                      }}
                    >
                      <source src="/Terminus-EC-Training/platform_onboarding_11-25-2025.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              
              <section style={{ padding: '2rem', background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Task Skeleton Download</h2>
                <p style={{ fontSize: '1.125rem', color: '#ffffff', marginBottom: '1.5rem', opacity: 0.95 }}>
                  Download the template task structure to get started quickly with your submission
                </p>
                <a 
                  href="/Terminus-EC-Training/template-task.zip" 
                  download="template-task.zip"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#1e40af',
                    padding: '0.875rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  📥 Download Task Skeleton
                </a>
              </section>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '550px', minWidth: '480px', width: '100%' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                borderRadius: '12px', 
                padding: '2rem', 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                width: '100%'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
                  GitHub Onboarding Materials
                </h3>
                
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <a 
                    href="/Terminus-EC-Training/Terminus%20EC%20Onboarding.pdf" 
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
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    View/Download Onboarding Slides
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
                      onError={(e) => {
                        console.error('Video load error:', e);
                        console.error('Video src:', e.target.currentSrc);
                      }}
                    >
                      <source src="/Terminus-EC-Training/Onboarding_11-14-2025.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              
              <section style={{ padding: '2rem', background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>GitHub Repository</h2>
                <p style={{ fontSize: '1.125rem', color: '#ffffff', marginBottom: '1.5rem', opacity: 0.95 }}>
                  Access the Terminal-Bench repository for development tools and resources
                </p>
                <a 
                  href="https://github.com/snorkel-ai/snorkel-tb-tasks" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#1e40af',
                    padding: '0.875rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  🔗 View GitHub Repo
                </a>
              </section>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button 
              className="resource-button" 
              onClick={() => onNavigate('expert-platform-walkthrough')}
              style={{ 
                maxWidth: '550px', 
                minWidth: '480px',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                border: 'none',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span className="button-text" style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>Expert Platform Submission Walkthrough</span>
              <span className="button-description" style={{ color: '#ffffff', opacity: 0.95, fontSize: '1rem', lineHeight: '1.6' }}>Step-by-step guide for submitting tasks on the Snorkel Expert Platform</span>
            </button>
            <button 
              className="resource-button" 
              onClick={() => onNavigate('workflow')}
              style={{ 
                maxWidth: '550px', 
                minWidth: '480px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                border: 'none',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span className="button-text" style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>GitHub Submission Walkthrough</span>
              <span className="button-description" style={{ color: '#ffffff', opacity: 0.95, fontSize: '1rem', lineHeight: '1.6' }}>Get started with the development process and task creation workflow</span>
            </button>
          </div>
          
          <div className="resource-buttons">
            <button className="resource-button" onClick={() => onNavigate('oracle')}>
              <span className="button-text">OracleAgent Video and Notebook</span>
              <span className="button-description">Covers how to run the Oracle Agent and debug any issues</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('workbook')}>
              <span className="button-text">CI Feedback Video and Notebook</span>
              <span className="button-description">Covers how to effectively utilize feedback from CI checks to iterate on submissions</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('local-testing')}>
              <span className="button-text">Local Testing Info</span>
              <span className="button-description">Instructions for testing tasks locally with real agents</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('feedback')}>
              <span className="button-text">Office Hours Videos and Slides</span>
              <span className="button-description">View Office Hours videos and feedback presentation slides with common issues and best practices</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('components')}>
              <span className="button-text">Task Components</span>
              <span className="button-description">Understand submission requirements</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('taxonomy')}>
              <span className="button-text">Task Type Taxonomy</span>
              <span className="button-description">Explore task categories and types</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('requirements')}>
              <span className="button-text">Task Requirements</span>
              <span className="button-description">Review design requirements and checklist</span>
            </button>
            <button className="resource-button" onClick={() => onNavigate('examples')}>
              <span className="button-text">Example Tasks</span>
              <span className="button-description">View sample tasks and implementations</span>
            </button>
            {/* <button className="resource-button" onClick={() => onNavigate('common-errors')}>
              <span className="button-text">Common Errors</span>
              <span className="button-description">Learn about common mistakes and how to avoid them</span>
            </button> */}
          </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;


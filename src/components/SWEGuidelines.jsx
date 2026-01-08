import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="collapsible-card">
      <button
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="collapsible-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}

function SWEGuidelines({ onNavigate }) {
  const { hasRole } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!hasRole('swe') && !hasRole('admin')) {
    return (
      <div className="access-denied">
        <h1>Access Denied</h1>
        <p>You don't have permission to view this page.</p>
        <button onClick={() => onNavigate('home')} className="back-button">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <button 
            onClick={() => onNavigate('home')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4b5563', fontWeight: 500 }}
          >
            ← Back to Home
          </button>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title">SWE Reviewer Guidelines</h1>
          <div className="slack-banner">
            <p className="hero-subtitle">Marlin – Prompt Review (V2)</p>
          </div>
        </div>

        <div className="overview-section">
          {/* Password Notice */}
          <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, color: '#1e40af', fontWeight: 600 }}>
              🔐 <strong>Password:</strong> <code style={{ backgroundColor: '#bfdbfe', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>swereviewer</code>
            </p>
          </div>

          {/* Walkthrough Video */}
          <h3>Walkthrough Video</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <iframe 
              src="https://www.loom.com/embed/389774afcf99474ea9a05d7e70b79e48" 
              frameBorder="0" 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            />
          </div>

          {/* Welcome */}
          <h3>Welcome</h3>
          <p>Thank you for helping review Marlin Prompt Review submissions. The SWE Review step is a fast, focused quality check designed to catch clear, high-impact issues before a submission reaches full audit.</p>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, color: '#92400e', fontWeight: 600 }}>
              ⏱️ <strong>Time Limit:</strong> Each review is time-boxed to approximately <strong>15 minutes</strong>. You are not expected to find every issue. Your goal is to validate the most important technical claims, confirm or dispute automated evaluations, and ensure the submitter's reasoning is sound and internally consistent.
            </p>
          </div>

          {/* Purpose */}
          <h3>Purpose of the SWE Review</h3>
          <p>The SWE Review serves as an early quality filter in a multi-stage review process. By identifying obvious technical or reasoning issues early, you help reduce unnecessary work in later stages and enable faster feedback to submitters.</p>
         

          {/* Collapsible Sections */}
          <CollapsibleSection title="What You Are NOT Expected to Do">
            <p>Because this review is time-limited, you do not need to:</p>
            <ul>
              <li>Install or run the repository</li>
              <li>Execute tests locally</li>
              <li>Deeply analyze every model turn</li>
              <li>Flag or diagnose LLM usage (handled in later review stages)</li>
            </ul>
            <p>If something appears suspicious, you may note it, but this is not required for acceptance or rejection at this stage.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Using the Reviewer Interface">
            <h4>Automated Evaluations</h4>
            <p>You may see automated evaluation feedback when one of our eval tools flags a potential issue. These tools are experimental—some evals will be correct, while others may be incomplete or incorrect. <strong>Part of your role is to validate whether the flagged issue is real.</strong></p>
            <img 
              src={`${import.meta.env.BASE_URL}media/images/evals.png`} 
              style={{ maxWidth: '500px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem', marginBottom: '1rem' }} 
              alt="Automated Evaluations" 
            />
            
            <p style={{ fontWeight: 500, marginTop: '1rem', marginBottom: '0.5rem' }}>📹 When NOT to trust evals:</p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <iframe 
                src="https://www.loom.com/embed/8ac61d41b1c1416c817ccf652459ff52" 
                frameBorder="0" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              />
            </div>

            <h4>Diff Viewer</h4>
            <p>You have access to a diff viewer showing file-level changes for each model turn. This is often the fastest and most reliable way to verify eval results or claims made in the submitter's pros, cons, or justification.</p>
            <img 
              src={`${import.meta.env.BASE_URL}media/images/Diff.png`} 
              style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem', marginBottom: '1rem' }} 
              alt="Diff Viewer" 
            />

            <h4>Conversation View</h4>
            <p>The conversation view shows the original prompt, model responses, preference ratings, and written reasoning. In most cases, you do not need to read full model outputs—focus instead on the diffs and the claims being made about them.</p>
            <img 
              src={`${import.meta.env.BASE_URL}media/images/sxs.png`} 
              style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem' }} 
              alt="Conversation View" 
            />
          </CollapsibleSection>

          <CollapsibleSection title="What to Focus On During Your Review">
            <p>Start with any automated eval failures and determine whether they are valid. If no evals are flagged, select a small number of high-impact claims made by the submitter and verify their technical accuracy.</p>
            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginTop: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.75rem', color: '#991b1b', fontWeight: 600 }}>Pay Special Attention To:</p>
              <ul style={{ margin: 0, color: '#991b1b', paddingLeft: '1.25rem' }}>
                <li>Incorrect, missing, or incomplete file changes</li>
                <li>Logic errors or broken behavior implied by the diff</li>
                <li>Claims that contradict the actual code changes</li>
                <li>Requested features or constraints that were not implemented</li>
                <li>Inconsistencies between ratings, preferences, and written justification</li>
              </ul>
            </div>
            <p><em>You are not expected to verify everything—focus on the areas most likely to reveal meaningful problems.</em></p>
          </CollapsibleSection>

          <CollapsibleSection title="Accepting vs. Rejecting a Submission">
            <p>You should reject a submission <strong>only when there are clear, serious problems</strong>. These include major technical misunderstandings, incorrect evaluation of model behavior, contradictions between reasoning and evidence, or violations of core project rules.</p>
            <p>If an issue is debatable or you are uncertain, it is generally better to <strong>accept the submission and clearly explain your uncertainty in the notes</strong>. The final adjudicator will use your findings to make the ultimate decision.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Rejection-Worthy Reasons">
            <p>A submission should be rejected only when one or more of the following are clearly and confidently true:</p>
            
            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Incorrect Overall Preference</p>
              <p style={{ margin: 0, color: '#991b1b' }}>The overall preference for a turn you evaluated is clearly and significantly incorrect, and that incorrect choice is supported by reasoning that does not match the actual evidence.</p>
            </div>

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Core Project Guidelines Not Followed</p>
              <ul style={{ margin: 0, color: '#991b1b', paddingLeft: '1.25rem' }}>
                <li>The prompt uses role-based prompting</li>
                <li>The prompt directly refers to the PR</li>
                <li>Later turns introduce new core requirements that should reasonably have been part of the original prompt</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Significant Contradictions</p>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b' }}>Contradictions that cannot be explained by nuance or reasonable differences of opinion:</p>
              <ul style={{ margin: 0, color: '#991b1b', paddingLeft: '1.25rem' }}>
                <li>Turn 1 explicitly instructs the model not to add comments, but the cons section criticizes the model for not adding comments</li>
                <li>Turn 1 asks for a new test file to be added, while turn 2 asks for that same test file to be deleted</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Spam or Fabricated Reasoning</p>
              <ul style={{ margin: 0, color: '#991b1b', paddingLeft: '1.25rem' }}>
                <li>Pros, cons, or justifications that are completely disconnected from the actual diff or model output</li>
                <li>Praising a model for work it did not do (e.g., claiming a model added tests when no tests were added)</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Issues You Can Flag (Accept, but Add Notes)">
            <p>Some issues are important to note but are not sufficient on their own to justify rejection. In these cases, you should <strong>accept the submission and clearly document your concerns</strong> for the final adjudicator.</p>
            
            <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#92400e', fontWeight: 600 }}>⚠️ Accept with Notes When:</p>
              <ul style={{ margin: 0, color: '#92400e', paddingLeft: '1.25rem' }}>
                <li>Signs of LLM use</li>
                <li>Disagreement with individual side-by-side (SxS) scores</li>
                <li>SxS scores that appear suspiciously similar to each other</li>
                <li>Any rejection-worthy concern where you are not 100% confident</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
              <p style={{ margin: 0, color: '#1e40af' }}>
                <strong>Important:</strong> Agreeing with an automated eval failure is not enough, by itself, to reject a submission. Always ensure the failure clearly fits one of the rejection-worthy categories before rejecting.
              </p>
            </div>
          </CollapsibleSection>

          {/* Non-collapsible sections */}
          <h3>Writing Your Review Notes</h3>
          <p>In your review fields, clearly describe what you checked and whether you agreed or disagreed, grounding your conclusions in concrete evidence from diffs or expected behavior.</p>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
            <p style={{ margin: 0, marginBottom: '0.5rem', fontWeight: 600 }}>Example Format</p>
            <div style={{ backgroundColor: '#ffffff', padding: '0.75rem', borderRadius: '4px', border: '1px solid #e2e8f0', fontFamily: 'monospace', fontSize: '0.875rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem' }}>• Submitter claimed Option A updated file X correctly → <strong>Disagreed</strong>; diff shows missing change.</p>
              <p style={{ margin: 0, marginBottom: '0.5rem' }}>• Eval flagged missing tests → <strong>Confirmed via diff</strong>.</p>
              <p style={{ margin: 0 }}>• Submitter stated Option B added redundant logic → <strong>Confirmed</strong>.</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, color: '#92400e' }}>
              <strong>If You Reject:</strong> You must write clear, professional, and actionable rejection notes explaining why the submission cannot be accepted. These notes are visible to the submitter. If the reasoning appears generic or non-technical, you may describe those observable issues, but <strong>do not speculate about or diagnose LLM usage</strong>.
            </p>
          </div>

          <h3>How Your Review Is Evaluated</h3>
          <p>You are <strong>not evaluated on whether you accept or reject</strong> a submission. Instead, we assess the accuracy, clarity, and usefulness of your written evaluations.</p>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
            <p style={{ margin: 0, marginBottom: '0.5rem', fontWeight: 600 }}>We Want to See Evidence That You:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li>Validated eval results honestly</li>
              <li>Investigated high-impact claims</li>
              <li>Explained your conclusions clearly</li>
              <li>Worked effectively within the 15-minute time limit</li>
            </ul>
          </div>
          <p><em>Missing lower-priority issues is expected and will not be held against you.</em></p>

          <h3>Final Reviewer Checklist</h3>
          <p>Before submitting, confirm that you:</p>
          <ul>
            <li>☐ Investigated at least one high-impact technical claim or eval</li>
            <li>☐ Confirmed or disputed eval results with evidence</li>
            <li>☐ Checked alignment between ratings, reasoning, and diffs</li>
            <li>☐ Made a defensible Accept or Reject decision</li>
            <li>☐ Wrote clear notes explaining your findings</li>
          </ul>

          {/* Rejection Notes Image */}
          <h3>Rejection Notes Field</h3>
          <img 
            src={`${import.meta.env.BASE_URL}media/images/5.png`} 
            style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '0.5rem' }} 
            alt="Rejection notes" 
          />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SWEGuidelines;
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
          <p>Thank you for helping review Marlin Prompt Review submissions. The SWE Review serves as a comprehensive quality check in our multi-stage review process. Through thorough, in-depth analysis of the code and metadata, you help ensure submissions meet our high quality standards before acceptance and enable accurate feedback to submitters. We expect these reviews to take 30-40 minutes.</p>
         

          {/* Collapsible Sections */}
          <CollapsibleSection title="What You Are Expected to Do">
            <p>Start with any automated eval failures and determine whether they are valid. Thoroughly review all claims made by the submitter and verify their technical accuracy against the code changes and metadata.</p>
            
            <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.75rem', fontWeight: 600 }}>Items to Check:</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li>Verify the conversation has 3+ turns with distinct, material code changes (not redundant)</li>
                <li>Confirm the code is production-ready and meets the PR specification</li>
                <li>Check alignment between overall preference, multi-axis ratings, pros/cons, and justification</li>
                <li>Assess whether pros/cons and justification are thorough (not spammy or superficial)</li>
                <li>Verify there are no major contradictions between prompts</li>
                <li>Verify prompts follow core project guidelines (no role-based prompting, no direct PR references)</li>
                <li>Check code accuracy: verify claims match actual code changes, identify logic errors, and confirm requested features/constraints were implemented</li>
                <li>Assess whether issues are metadata-only (ratings, pros/cons, justification) or involve prompts/code</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '1.5rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', fontWeight: 600 }}>What You Are NOT Expected to Do:</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li>Install or run the repository</li>
                <li>Execute tests locally</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="When to Accept, Reject, and Send for Revision">
            <h4>Accept when:</h4>
            
            <div style={{ backgroundColor: '#dcfce7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#166534', fontWeight: 600 }}>✅ Overall Preference Aligns with Ratings, Pros, and Cons</p>
              <p style={{ margin: 0, color: '#166534' }}>The overall preference for each turn is consistent with the individual ratings, pros, and cons provided. There are no contradictions between the preference selection and the supporting reasoning.</p>
            </div>

            <div style={{ backgroundColor: '#dcfce7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#166534', fontWeight: 600 }}>✅ Conversation Has 3+ Turns with Distinct Material Code Changes and Production-Ready Code</p>
              <p style={{ margin: 0, color: '#166534' }}>The conversation contains at least 3 turns that request distinct, material code changes and results in production-ready code that meets the PR specification. Each prompt asks for distinct changes that are not redundant with previous turns, and the final code fully meets all requirements outlined in the PR.</p>
            </div>

            <div style={{ backgroundColor: '#dcfce7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#166534', fontWeight: 600 }}>✅ Thorough Pros and Cons Align with Ratings and Preference</p>
              <p style={{ margin: 0, color: '#166534' }}>The pros and cons sections are thorough, well-reasoned, and align with both the individual ratings and the overall preference. The analysis demonstrates a clear understanding of the trade-offs between options.</p>
            </div>

            <div style={{ backgroundColor: '#dcfce7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#166534', fontWeight: 600 }}>✅ No Major Contradictions Between Prompts</p>
              <p style={{ margin: 0, color: '#166534' }}>There are no major contradictions between prompts across different turns. The conversation maintains consistency and logical progression without conflicting instructions or requirements.</p>
            </div>
            
            <h4>Send for Revision When:</h4>
            
            <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#92400e', fontWeight: 600 }}>⚠️ Conversation Has 3+ Turns with Distinct Material Code Changes and Production-Ready Code, But Overall Preference Has Issues</p>
              <p style={{ margin: 0, marginBottom: '0.75rem', color: '#92400e' }}>The conversation meets the structural requirements (3+ turns, distinct material code changes, production-ready code that meets PR specification), but the overall preference is correct while there are issues with:</p>
              <ul style={{ margin: 0, color: '#92400e', paddingLeft: '1.25rem' }}>
                <li>Misalignment with multi-axis ratings and pros/cons</li>
                <li>Non-thorough pros/cons and/or justification</li>
                <li>Spammy ratings</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#92400e', fontWeight: 600 }}>⚠️ Important: Metadata-Only vs. Code/Prompt Issues</p>
              <p style={{ margin: 0, color: '#92400e' }}>If the necessary changes are solely to the metadata (i.e. multi-axis ratings, pros/cons, justification), then the submission can be sent for revision to have these fixed. However, if there are issues with the prompts or code itself, the submission needs to be rejected.</p>
            </div>
            
            <h4>Reject when:</h4>
            
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

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Spam or Fabricated Reasoning</p>
              <ul style={{ margin: 0, color: '#991b1b', paddingLeft: '1.25rem' }}>
                <li>Pros, cons, or justifications that are completely disconnected from the actual diff or model output</li>
                <li>Praising a model for work it did not do (e.g., claiming a model added tests when no tests were added)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '1rem' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Conversation Has Fewer Than 3 Turns</p>
              <p style={{ margin: 0, color: '#991b1b' }}>The conversation contains fewer than 3 turns, which does not meet the minimum requirement for a complete submission.</p>
            </div>

            <div style={{ backgroundColor: '#fee2e2', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
              <p style={{ margin: 0, marginBottom: '0.5rem', color: '#991b1b', fontWeight: 600 }}>❌ Redundant Prompting or No Material Code Changes</p>
              <p style={{ margin: 0, color: '#991b1b' }}>Later turns contain prompting that is redundant with previous turns, or no material code changes are required or made. The conversation does not demonstrate meaningful progression or refinement.</p>
            </div>
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
            <p>The conversation view shows the original prompt, model responses, preference ratings, and written reasoning. Review the full conversation context along with the diffs to thoroughly verify the claims being made.</p>
            <img 
              src={`${import.meta.env.BASE_URL}media/images/sxs.png`} 
              style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem' }} 
              alt="Conversation View" 
            />
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
              <li>Thoroughly investigated all claims and technical details</li>
              <li>Explained your conclusions clearly</li>
              <li>Conducted a comprehensive review of the submission</li>
            </ul>
          </div>

          <h3>Final Reviewer Checklist</h3>
          <p>Before submitting, confirm that you:</p>
          <div>
            <p>☐ Thoroughly investigated all technical claims and evals</p>
            <p>☐ Confirmed or disputed eval results with evidence</p>
            <p>☐ Checked alignment between ratings, reasoning, and diffs</p>
            <p>☐ Reviewed all code changes and verified their accuracy</p>
            <p>☐ Made a defensible Accept or Reject decision</p>
            <p>☐ Wrote clear notes explaining your findings</p>
          </div>

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
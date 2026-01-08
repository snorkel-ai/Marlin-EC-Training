import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Guidelines.css';

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
    <div className="guidelines">
      <header className="guidelines-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
      </header>

      <main className="guidelines-main" style={{ marginLeft: 0 }}>
        <div className="guide-container">
          <h1 className="guide-title">SWE Reviewer Guidelines</h1>
          <p className="guide-subtitle">Marlin – Prompt Review (V2)</p>

          {/* Password Notice */}
          <div style={{ backgroundColor: '#dbeafe', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #2563eb', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, color: '#1e40af', fontWeight: 600 }}>
              🔐 <strong>Password:</strong> <code style={{ backgroundColor: '#bfdbfe', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>swereviewer</code>
            </p>
          </div>

          {/* Walkthrough Video */}
          <section className="guide-section">
            <h2 className="section-heading">Walkthrough Video</h2>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <iframe src="https://www.loom.com/embed/389774afcf99474ea9a05d7e70b79e48" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            </div>
          </section>

          {/* Introduction */}
          <section className="guide-section">
            <h2 className="section-heading">Welcome</h2>
            <p>Thank you for helping review Marlin Prompt Review submissions. The SWE Review step is a fast, focused quality check designed to catch clear, high-impact issues before a submission reaches full audit.</p>
            <div className="callout callout-warning">
              <strong>⏱️ Time Limit:</strong> Each review is time-boxed to approximately <strong>15 minutes</strong>. You are not expected to find every issue. Your goal is to validate the most important technical claims, confirm or dispute automated evaluations, and ensure the submitter's reasoning is sound and internally consistent.
            </div>
          </section>

          {/* Purpose */}
          <section className="guide-section">
            <h2 className="section-heading">Purpose of the SWE Review</h2>
            <p>The SWE Review serves as an early quality filter in a multi-stage review process. By identifying obvious technical or reasoning issues early, you help reduce unnecessary work in later stages and enable faster feedback to submitters.</p>
            <p><strong>This step prioritizes correctness, clarity, and consistency—not completeness.</strong></p>
          </section>

          {/* What You Are NOT Expected to Do */}
          <section className="guide-section">
            <h2 className="section-heading">What You Are NOT Expected to Do</h2>
            <p>Because this review is time-limited, you do not need to:</p>
            <ul className="guide-list">
              <li>Install or run the repository</li>
              <li>Execute tests locally</li>
              <li>Deeply analyze every model turn</li>
              <li>Flag or diagnose LLM usage (handled in later review stages)</li>
            </ul>
            <p>If something appears suspicious, you may note it, but this is not required for acceptance or rejection at this stage.</p>
          </section>

          {/* Using the Reviewer Interface */}
          <section className="guide-section">
            <h2 className="section-heading">Using the Reviewer Interface</h2>
            
            <div className="info-card">
              <h3>Automated Evaluations</h3>
              <p>You may see automated evaluation feedback when one of our eval tools flags a potential issue. These tools are experimental—some evals will be correct, while others may be incomplete or incorrect. <strong>Part of your role is to validate whether the flagged issue is real.</strong></p>
              <img src={`${import.meta.env.BASE_URL}media/images/evals.png`} style={{ maxWidth: '500px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem' }} alt="Automated Evaluations" />
            </div>

            <div className="info-card">
              <h3>Diff Viewer</h3>
              <p>You have access to a diff viewer showing file-level changes for each model turn. This is often the fastest and most reliable way to verify eval results or claims made in the submitter's pros, cons, or justification.</p>
              <img src={`${import.meta.env.BASE_URL}media/images/Diff.png`} style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem' }} alt="Diff Viewer" />
            </div>

            <div className="info-card">
              <h3>Conversation View</h3>
              <p>The conversation view shows the original prompt, model responses, preference ratings, and written reasoning. In most cases, you do not need to read full model outputs—focus instead on the diffs and the claims being made about them.</p>
              <img src={`${import.meta.env.BASE_URL}media/images/sxs.png`} style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '1rem' }} alt="Conversation View" />
            </div>
          </section>

          {/* What to Focus On */}
          <section className="guide-section">
            <h2 className="section-heading">What to Focus On During Your Review</h2>
            <p>Start with any automated eval failures and determine whether they are valid. If no evals are flagged, select a small number of high-impact claims made by the submitter and verify their technical accuracy.</p>
            
            <div className="callout callout-danger">
              <h3>Pay Special Attention To:</h3>
              <ul className="guide-list">
                <li>Incorrect, missing, or incomplete file changes</li>
                <li>Logic errors or broken behavior implied by the diff</li>
                <li>Claims that contradict the actual code changes</li>
                <li>Requested features or constraints that were not implemented</li>
                <li>Inconsistencies between ratings, preferences, and written justification</li>
              </ul>
            </div>
            <p><em>You are not expected to verify everything—focus on the areas most likely to reveal meaningful problems.</em></p>
          </section>

          {/* Accepting vs Rejecting */}
          <section className="guide-section">
            <h2 className="section-heading">Accepting vs. Rejecting a Submission</h2>
            <p>You should reject a submission <strong>only when there are clear, serious problems</strong>. These include major technical misunderstandings, incorrect evaluation of model behavior, contradictions between reasoning and evidence, or violations of core project rules.</p>
            <p>If an issue is debatable or you are uncertain, it is generally better to <strong>accept the submission and clearly explain your uncertainty in the notes</strong>. The final adjudicator will use your findings to make the ultimate decision.</p>
          </section>

          {/* Rejection-Worthy Reasons */}
          <section className="guide-section">
            <h2 className="section-heading">Rejection-Worthy Reasons</h2>
            <p>A submission should be rejected only when one or more of the following are clearly and confidently true:</p>

            <div className="decision-card decision-reject" style={{ marginBottom: '1.5rem' }}>
              <h3>❌ Incorrect Overall Preference</h3>
              <p>The overall preference for a turn you evaluated is clearly and significantly incorrect, and that incorrect choice is supported by reasoning that does not match the actual evidence.</p>
            </div>

            <div className="decision-card decision-reject" style={{ marginBottom: '1.5rem' }}>
              <h3>❌ Core Project Guidelines Not Followed</h3>
              <ul className="guide-list">
                <li>The prompt uses role-based prompting</li>
                <li>The prompt directly refers to the PR</li>
                <li>Later turns introduce new core requirements that should reasonably have been part of the original prompt</li>
              </ul>
            </div>

            <div className="decision-card decision-reject" style={{ marginBottom: '1.5rem' }}>
              <h3>❌ Significant Contradictions</h3>
              <p>Contradictions that cannot be explained by nuance or reasonable differences of opinion:</p>
              <ul className="guide-list">
                <li>Turn 1 explicitly instructs the model not to add comments, but the cons section criticizes the model for not adding comments</li>
                <li>Turn 1 asks for a new test file to be added, while turn 2 asks for that same test file to be deleted</li>
              </ul>
            </div>

            <div className="decision-card decision-reject">
              <h3>❌ Spam or Fabricated Reasoning</h3>
              <ul className="guide-list">
                <li>Pros, cons, or justifications that are completely disconnected from the actual diff or model output</li>
                <li>Praising a model for work it did not do (e.g., claiming a model added tests when no tests were added)</li>
              </ul>
            </div>
          </section>

          {/* Issues You Can Flag */}
          <section className="guide-section">
            <h2 className="section-heading">Issues You Can Flag (Accept, but Add Notes)</h2>
            <p>Some issues are important to note but are not sufficient on their own to justify rejection. In these cases, you should <strong>accept the submission and clearly document your concerns</strong> for the final adjudicator.</p>
            
            <div className="decision-card decision-accept">
              <h3>✅ Accept with Notes When:</h3>
              <ul className="guide-list">
                <li>Signs of LLM use</li>
                <li>Disagreement with individual side-by-side (SxS) scores</li>
                <li>SxS scores that appear suspiciously similar to each other</li>
                <li>Any rejection-worthy concern where you are not 100% confident</li>
              </ul>
            </div>

            <div className="callout callout-info" style={{ marginTop: '1rem' }}>
              <strong>Important:</strong> Agreeing with an automated eval failure is not enough, by itself, to reject a submission. Always ensure the failure clearly fits one of the rejection-worthy categories before rejecting.
            </div>
          </section>

          {/* Writing Your Review Notes */}
          <section className="guide-section">
            <h2 className="section-heading">Writing Your Review Notes</h2>
            <p>In your review fields, clearly describe what you checked and whether you agreed or disagreed, grounding your conclusions in concrete evidence from diffs or expected behavior.</p>
            
            <div className="info-card">
              <h3>Example Format</h3>
              <div className="code-example">
                <p>• Submitter claimed Option A updated file X correctly → <strong>Disagreed</strong>; diff shows missing change.</p>
                <p>• Eval flagged missing tests → <strong>Confirmed via diff</strong>.</p>
                <p>• Submitter stated Option B added redundant logic → <strong>Confirmed</strong>.</p>
              </div>
            </div>

            <div className="callout callout-warning" style={{ marginTop: '1rem' }}>
              <strong>If You Reject:</strong> You must write clear, professional, and actionable rejection notes explaining why the submission cannot be accepted. These notes are visible to the submitter. If the reasoning appears generic or non-technical, you may describe those observable issues, but <strong>do not speculate about or diagnose LLM usage</strong>.
            </div>

            <div className="info-card">
              <h3>Rejection Notes Field</h3>
              <img src={`${import.meta.env.BASE_URL}media/images/5.png`} style={{ maxWidth: '800px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', marginTop: '0.5rem' }} alt="Rejection notes" />
            </div>
          </section>

          {/* How Your Review Is Evaluated */}
          <section className="guide-section">
            <h2 className="section-heading">How Your Review Is Evaluated</h2>
            <p>You are <strong>not evaluated on whether you accept or reject</strong> a submission. Instead, we assess the accuracy, clarity, and usefulness of your written evaluations.</p>
            
            <div className="info-card">
              <h3>We Want to See Evidence That You:</h3>
              <ul className="guide-list">
                <li>Validated eval results honestly</li>
                <li>Investigated high-impact claims</li>
                <li>Explained your conclusions clearly</li>
                <li>Worked effectively within the 15-minute time limit</li>
              </ul>
            </div>
            <p><em>Missing lower-priority issues is expected and will not be held against you.</em></p>
          </section>

          {/* Final Checklist */}
          <section className="guide-section">
            <h2 className="section-heading">Final Reviewer Checklist</h2>
            <p>Before submitting, confirm that you:</p>
            <ul className="checklist">
              <li>Investigated at least one high-impact technical claim or eval</li>
              <li>Confirmed or disputed eval results with evidence</li>
              <li>Checked alignment between ratings, reasoning, and diffs</li>
              <li>Made a defensible Accept or Reject decision</li>
              <li>Wrote clear notes explaining your findings</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="guidelines-footer" style={{ marginLeft: 0 }}>
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SWEGuidelines;
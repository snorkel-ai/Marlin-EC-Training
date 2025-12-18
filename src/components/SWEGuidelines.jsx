import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Guidelines.css';

function SWEGuidelines({ onNavigate }) {
  const { userRole } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (userRole !== 'swe') {
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
          <h1 className="guide-title">SWE Reviewer Guide</h1>
          <p className="guide-subtitle">How to Review Marlin-Prompt-Review-V2 Submissions</p>

          {/* Reviewer Interface Overview */}
          <section className="guide-section">
            <h2 className="section-heading">Reviewer Interface Overview</h2>

            <div className="info-card">
              <h3>Accept / Reject Selector</h3>
            
               <img 
            src={`${import.meta.env.BASE_URL}media/images/4.png`}  
            style={{ 
              maxWidth: '800px', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '1rem'
            }} 
          />
            </div>

            <div className="info-card">
              <h3>Evaluation Fields</h3>
              <ul className="guide-list">
                <li><strong>What evals did you agree with / were able to confirm?</strong></li>
                <li><strong>What evals did you disagree with / disprove?</strong></li>
                <li>Pros/cons/justification elements you investigated and whether you confirmed or disagreed.</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Rejection Notes Field</h3>
                <img 
            src={`${import.meta.env.BASE_URL}media/images/5.png`}  
            style={{ 
              maxWidth: '800px', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '1rem'
            }} 
          />
            </div>
          </section>

          {/* Your Responsibilities */}
          <section className="guide-section">
            <h2 className="section-heading">Your Responsibilities as an SWE Reviewer</h2>
            <p>As a reviewer, your job is to validate the technical accuracy of a submitter's work. This includes:</p>
            <ul className="guide-list">
              <li>Checking whether the chosen model turn is valid.</li>
              <li>Verifying claims in the submitter's pros/cons and justification sections.</li>
              <li>Confirming or disproving evaluations (evals) based on diffs, logic, and expected behavior.</li>
              <li>Ensuring the submission is internally consistent and aligned with the project workflow.</li>
            </ul>
            <div className="callout callout-warning">
              <strong>⏱️ Time Limit:</strong> This review is time-boxed to ~15 minutes. Focus on correctness, clarity, and consistency.
            </div>
          </section>

          {/* What You Must Investigate */}
          <section className="guide-section">
            <h2 className="section-heading">What You Must Investigate</h2>

            <div className="callout callout-danger">
              <h3>1. Serious Technical Issues</h3>
              <p>Examples include:</p>
              <ul className="guide-list">
                <li>Incorrect, missing, or incomplete file updates.</li>
                <li>Logic errors or broken behavior in the proposed changes.</li>
                <li>Tests that fail or would fail based on the modifications.</li>
                <li>Claims that contradict the actual diff or model output.</li>
                <li>Features requested in the PR or prompt that were not implemented.</li>
              </ul>
            </div>

            <div className="callout callout-info">
              <h3>2. Evaluation Accuracy</h3>
              <p><strong>If evals flagged issues:</strong></p>
              <ul className="guide-list">
                <li>Start with the most severe ones and confirm or dispute them.</li>
              </ul>
              <p><strong>If evals did not flag issues:</strong></p>
              <ul className="guide-list">
                <li>Select a few of the submitter's own pros/cons or justification items and check whether their claims are technically correct.</li>
              </ul>
            </div>
          </section>

          {/* Accept vs Reject */}
          <section className="guide-section">
            <h2 className="section-heading">How to Decide "Accept" vs. "Reject"</h2>

            <div className="decision-grid">
              <div className="decision-card decision-accept">
                <h3>✅ Accept when:</h3>
                <ul className="guide-list">
                  <li>The submitter's reasoning is technically sound.</li>
                  <li>Their chosen model turn is appropriate and defensible.</li>
                  <li>Their justifications match the actual diffs and behavior.</li>
                  <li>No major missed errors or contradictions exist.</li>
                  <li>All required fields are filled out clearly and consistently.</li>
                </ul>
              </div>

              <div className="decision-card decision-reject">
                <h3>❌ Reject when:</h3>
                <ul className="guide-list">
                  <li>The reasoning contains clear technical misunderstandings.</li>
                  <li>Major model errors were missed or incorrectly evaluated.</li>
                  <li>The submission contradicts the diffs, tests, or expected behavior.</li>
                  <li>Pros/cons, eval ratings, and justification do not align.</li>
                  <li>Critical claims made by the submitter are demonstrably incorrect.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Fill Out Each Field */}
          <section className="guide-section">
            <h2 className="section-heading">How to Fill Out Each Field</h2>

            <div className="info-card">
              <h3>1. Pros/Cons/Justification Elements You Investigated</h3>
              <p>Describe which elements you checked and whether you confirmed or disagreed.</p>
              <div className="code-example">
                <p>• Submitter claimed Option A updated file X correctly → <strong>Disagreed</strong>; diff shows missing change.</p>
                <p>• Submitter stated Option B added redundant logic → <strong>Confirmed</strong>.</p>
              </div>
            </div>

            <div className="info-card">
              <h3>2. Evals You Disagreed With / Disproved</h3>
              <p>Use this to correct incorrect evaluation results.</p>
              <div className="code-example">
                <p>• Eval flagged missing tests, but tests are present → <strong>Disproved</strong>.</p>
                <p>• Eval passed file-structure check, but file placement is incorrect → <strong>Disagreed</strong>.</p>
              </div>
            </div>

            <div className="info-card">
              <h3>3. Evals You Agreed With / Were Able to Confirm</h3>
              <p>Indicate which evals are correct and validated.</p>
              <div className="code-example">
                <p>• Eval correctly identified missing error handling → <strong>Confirmed via diff</strong>.</p>
                <p>• Eval flagged incorrect import path → <strong>Confirmed</strong>.</p>
              </div>
            </div>
          </section>

          {/* Rejection Notes */}
          <section className="guide-section">
            <h2 className="section-heading">Rejection Notes (When Applicable)</h2>
            <p>If you choose Reject, you must write clear, constructive notes explaining:</p>
            <ul className="guide-list">
              <li>Why the submission cannot be accepted.</li>
              <li>Which specific mistakes or inconsistencies caused the rejection.</li>
              <li>How the submitter can improve in future reviews.</li>
            </ul>
            <p><em>This section is visible to the submitter, so keep it professional, precise, and actionable.</em></p>

            <div className="info-card">
              <h3>Examples of acceptable rejection explanations:</h3>
              <div className="code-example">
                <p>• The submission missed core issues in the model's diff, including missing feature implementation and incorrect logic paths.</p>
                <p>• Several evals were marked as correct, but investigation showed incorrect conclusions.</p>
                <p>• Pros/cons did not match the preference ratings, creating inconsistency in the reasoning.</p>
              </div>
            </div>

            <div className="callout callout-warning">
              <strong>⚠️ Clarification on LLM-related issues:</strong>
              <p>If the writing shows clear signs that the submitter did not perform the technical evaluation themselves, you may include this in the Rejection Notes, but only as part of explaining why their reasoning was invalid (e.g., generic, non-technical, or contradictory analysis). You should not diagnose LLM use directly—only describe observable issues.</p>
            </div>
          </section>

          {/* Final Checklist */}
          <section className="guide-section">
            <h2 className="section-heading">Final Reviewer Checklist</h2>
            <p>Before submitting your review, ensure you:</p>
            <ul className="checklist">
              <li>Investigated at least the most important technical claims.</li>
              <li>Confirmed or disputed evals with evidence.</li>
              <li>Checked alignment between ratings, pros/cons, and justification.</li>
              <li>Provided a clear and defensible Accept/Reject decision.</li>
              <li>Wrote constructive Rejection Notes when rejecting.</li>
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
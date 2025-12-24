import { useEffect } from 'react';
import './ContentCards.css';

function CLI({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content-card-page">
      <header className="content-card-header">
        <button className="content-card-back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <h1 className="content-card-title">CLI Tool Installation Guide</h1>
      </header>

      <main className="content-card-main">

        <section className="content-card-section">
          <h2>1. System Requirements</h2>
          <p>Before beginning, ensure that your system has:</p>
          <ul>
            <li>Git</li>
            <li>VS Code (added to PATH)</li>
            <li>Terminal access</li>
            <li>Internet connection</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="content-card-section">
          <h2>2. Add VS Code to PATH</h2>
          <p>The CLI tool requires VS Code to be accessible from the command line. Follow the instructions for your operating system.</p>

          <h3>macOS</h3>
          <p><strong>Method 1: From inside VS Code (recommended)</strong></p>
          <ol>
            <li>Open VS Code.</li>
            <li>Press <code>Cmd + Shift + P</code> to open the Command Palette.</li>
            <li>Type: <code>Shell Command: Install 'code' command in PATH</code></li>
            <li>Press Enter.</li>
          </ol>
          <p>Verify the installation:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`code --version`}
          </pre>
          <p>If you see version info, the setup is complete.</p>

          <p><strong>Method 2: Add manually (if Method 1 does not work)</strong></p>
          <p>VS Code installs its binary here:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`/Applications/Visual Studio Code.app/Contents/Resources/app/bin`}
          </pre>
          <p>Add to PATH in your shell config (zsh):</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`echo 'export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc`}
          </pre>

          <h3>Linux</h3>
          <p>If installed via a package manager (snap, apt, yum), VS Code often adds itself to PATH automatically.</p>
          <p>If not, add manually by appending the following to your <code>.bashrc</code> or <code>.zshrc</code>:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`export PATH="$PATH:/usr/share/code/bin"`}
          </pre>
          <p>Then reload your shell:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`source ~/.bashrc`}
          </pre>
        </section>

        <section className="content-card-section">
          <h2>3. Install Required Dependencies</h2>
          <p>The CLI tool relies on tmux to display and manage live model sessions. Install it before continuing.</p>

          <h3>macOS (Homebrew)</h3>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`brew install tmux`}
          </pre>

          <h3>Linux</h3>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`sudo apt update
sudo apt install tmux`}
          </pre>

          <h3>Verify installation</h3>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`tmux -V`}
          </pre>
        </section>

        <section className="content-card-section">
          <h2>4. Download and Prepare the Repository</h2>
          <p>After your Prompt-Preparation submission is accepted, you will receive an email with a link to download the repository tarball.</p>
          
          <img 
            src={`${import.meta.env.BASE_URL}media/images/submission-email.png`} 
            alt="Submission email" 
            style={{ 
              maxWidth: '800px', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '1rem'
            }} 
          />

          <p>Download the tarball using the <strong>repo link</strong> from the email, then unpack and initialize it:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`# Download the tarball from the email link
# Then unpack it:
tar -xvf <downloaded-file>.tar

# Navigate into the unpacked directory
cd <repo-folder>

# Initialize git in the repository
git init`}
          </pre>
          <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af' }}>
            Make sure to run <code>git init</code> inside the root of the unpacked directory. This is required for the CLI tool to track changes.
          </p>
        </section>

        <section className="content-card-section">
          <h2>5. Log Into Your Alias Email</h2>
          <p>Navigate to: <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af' }}>https://mail.google.com</a></p>
          <p>Sign in using the provided Alias email credentials.</p>
          <p style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '6px', color: '#92400e' }}>
            Complete MFA setup and create a new password. This email should only be used to authenticate into the tool.
          </p>
        </section>

        <section className="content-card-section">
          <h2>6. Access the Anthropic Tool</h2>
          <p>Open the following URL:</p>
          <p><a href="https://feedback.anthropic.com/claude_code?email_login=true" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 600 }}>https://feedback.anthropic.com/claude_code?email_login=true</a></p>
        </section>

        <section className="content-card-section">
          <h2>7. Authenticate Using Your Alias Email</h2>
          <ul>
            <li>Enter your Alias email address.</li>
            <li>A verification code will be sent to your Alias inbox.</li>
            <li>Enter the code to complete login.</li>
          </ul>
          <img 
            src={`${import.meta.env.BASE_URL}media/images/Login.png`} 
            alt="Login screen" 
            style={{ 
              maxWidth: '500px', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginTop: '1rem'
            }} 
          />
          <p style={{ backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '6px', color: '#dc2626', marginTop: '1rem' }}>
            Do not use "Sign in with Google." If authentication fails on the first attempt, simply repeat the login.
          </p>
        </section>

        <section className="content-card-section">
          <h2>8. Download the Appropriate CLI Tool Build</h2>
          <img 
            src={`${import.meta.env.BASE_URL}media/images/version.png`} 
            alt="Version comparison" 
            style={{ 
              maxWidth: '800px', 
              width: '100%', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '1rem'
            }} 
          />
          <p>Select the binary that matches your operating system and CPU architecture:</p>
          <ul>
            <li>macOS (Intel)</li>
            <li>macOS (ARM)</li>
            <li>Linux</li>
          </ul>
          <p>The file will download to <code>~/Downloads</code> by default.</p>
        </section>

        <section className="content-card-section">
          <h2>9. Move and Prepare the CLI Tool</h2>
          <p>From within the root of your cloned repository, move the downloaded file into place and make it executable:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`mv ~/Downloads/<downloaded-filename> claude-hfi
chmod +x claude-hfi`}
          </pre>
          <p>Example:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`mv ~/Downloads/darwin-arm64 claude-hfi
chmod +x claude-hfi

ls
claude-hfi    README.md`}
          </pre>
          <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af' }}>
            Every repository you work on must contain its own copy of <code>claude-hfi</code> placed at the root. You will need to repeat this step (moving the tool to the repo root) for each new repository you work on.
          </p>
        </section>

        <section className="content-card-section">
          <h2>10. Launch the CLI Tool in VS Code Mode</h2>
          <p>Run the following command from the repository root:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`./claude-hfi --vscode`}
          </pre>
          <p>This initializes the tool, performs authentication if required, and prepares the environment. Two separate VS Code windows (Trajectory A and Trajectory B) will be opened automatically during execution.</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '0.85rem' }}>
            {`./claude-hfi --vscode

Trajectory A:
  Worktree: /Users/chong/.cache/claude-hfi/-Users-chong-Documents-Project-Test/A
  Terminal: tmux attach -t 2ba1f138-1233-4f40-903a-5b4f35919683-A

Trajectory B:
  Worktree: /Users/chong/.cache/claude-hfi/-Users-chong-Documents-Project-Test/B
  Terminal: tmux attach -t 2ba1f138-1233-4f40-903a-5b4f35919683-B

HFI - Human Feedback Interface

Please enter the interface code:`}
          </pre>
          <p style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '6px', color: '#92400e' }}>
            Recommendation: Run this command from a terminal outside of VS Code (e.g., the built-in macOS Terminal or iTerm). Otherwise, the two new VS Code windows for Trajectory A and Trajectory B may not open correctly.
          </p>
          <p style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '6px', color: '#92400e', marginTop: '0.5rem' }}>
            Important: If you are working entirely inside VS Code, you must use Git Diff to inspect all file changes. VS Code does not automatically highlight which lines or files have changed. You must manually review differences using the Source Control panel or "Compare with Previous" functionality.
          </p>
        </section>

        <section className="content-card-section">
          <h2>11. Resume a Previous Session</h2>
          <p>If you closed your session and want to continue working on a previous task, use the <code>--continue</code> flag:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`./claude-hfi --continue`}
          </pre>
          <p>This will restore your previous session and allow you to pick up where you left off.</p>
          <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af' }}>
            Use this flag when resuming work after closing VS Code or your terminal. It reconnects to your existing trajectories without starting a new session.
          </p>
        </section>

        <section className="content-card-section">
          <h2>12. Enter the Interface Code</h2>
          <p>When prompted for the Interface Code, enter:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`cc_agentic_coding`}
          </pre>
          <p>This enables the correct workflow mode for the project.</p>
        </section>

        <section className="content-card-section">
          <h2>13. Attach to tmux Sessions</h2>
          <p>In each VS Code window, open the integrated terminal and attach to the appropriate tmux session:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`tmux attach -t <session-id>-A`}
          </pre>
          <p>and</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`tmux attach -t <session-id>-B`}
          </pre>
          <p>These sessions display live model output, including command execution, file generation, testing activity, and any required user interaction.</p>
          <p style={{ backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '6px', color: '#dc2626' }}>
            Make sure you run the correct tmux attach command in the correct VS Code window. Trajectory A's command should be run in Trajectory A's VS Code window, and Trajectory B's command in Trajectory B's window.
          </p>
          <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af', marginTop: '0.5rem' }}>
            If tmux reports the session name is invalid, use tab completion to identify the correct session ID.
          </p>
        </section>

        <section className="content-card-section">
          <h2>14. Provide Your Initial Prompt</h2>
          <p>Paste the full prompt you completed during Prompt-Preparation. Press Enter to begin model execution.</p>
          <p>The CLI tool will start two independent trajectories, each in its own VS Code instance.</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '0.85rem' }}>
            {`> Create a riddle and add it to readme.md

Waiting for trajectories to complete.
Check tmux session "2ba1f138-...-A" and session "2ba1f138-...-B" for possible tool permission requests.`}
          </pre>
        </section>

        <section className="content-card-section">
          <h2>15. Wait for Trajectory Completion</h2>
          <p>In the main terminal, the tool will display:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`Waiting for trajectories to complete...`}
          </pre>
          <p style={{ backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '6px', color: '#dc2626' }}>
            Do not proceed until both trajectories have finished running.
          </p>
        </section>

        <section className="content-card-section">
          <h2>16. Review All Generated Files</h2>
          <p>When execution completes, carefully review the outputs of both trajectories.</p>
          <p style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '6px', color: '#92400e' }}>
            Important: If you are working entirely inside VS Code, you must use Git Diff to inspect all file changes. VS Code does not automatically highlight which lines or files have changed.
          </p>

          <h3>Review Procedure</h3>
          <ol>
            <li>Open the VS Code Source Control panel.</li>
            <li>Click on every modified file.</li>
            <li>Examine each line-level diff.</li>
            <li>Confirm that all requested behavior has been implemented.</li>
            <li>Ensure the model did not introduce unnecessary changes or files.</li>
            <li>Verify that no required functionality is missing.</li>
            <li>If the repository includes tests, run them and confirm they pass.</li>
            <li>If new functionality requires additional tests, ensure they exist and are correct.</li>
          </ol>
          <p style={{ backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '6px', color: '#dc2626' }}>
            Thorough file review is mandatory. Missing or incorrect diff inspection is a common cause of rejected submissions.
          </p>
        </section>

        <section className="content-card-section">
          <h2>17. Compare Trajectory Versions</h2>
          <p>After both trajectories complete, compare the differences between Version A and Version B:</p>

          <h3>Version A:</h3>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '0.85rem' }}>
            {`git diff

--- a/README.md
+++ b/README.md
@@ -1 +1,14 @@
 # Test

+## Riddle
+
+I have keys but no locks,
+I have space but no room,
+You can enter but can't go inside.
+
+What am I?`}
          </pre>

          <h3>Version B:</h3>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '0.85rem' }}>
            {`git diff

diff --git a/README.md b/README.md
index 8ae0569..d73214a 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,7 @@
 # Test
+
+## Riddle of the Day
+
+I speak without a mouth and hear without ears. 
+I have no body, but I come alive with wind. What am I?
+
+*Answer: An echo*`}
          </pre>

          <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af' }}>
            Review both versions carefully and select the one that best meets the acceptance criteria.
          </p>
        </section>

        <section className="content-card-section">
          <h2>18. Exit tmux Sessions</h2>
          <p>Once review is complete, close each tmux session:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`exit`}
          </pre>
        </section>

        <section className="content-card-section">
          <h2>19. Uninstall / Cleanup</h2>
          <p>To remove the CLI tool from a repository:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`rm claude-hfi`}
          </pre>
          <p>To clear cached worktrees:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`rm -rf ~/.cache/claude-hfi`}
          </pre>
          <p>To kill all tmux sessions:</p>
          <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            {`tmux kill-server`}
          </pre>
        </section>

        {/* Troubleshooting Section */}
        <section className="content-card-section" style={{ borderTop: '3px solid #dc2626', paddingTop: '2rem', marginTop: '3rem' }}>
          <h2 style={{ color: '#dc2626' }}>🔧 Troubleshooting</h2>

          {/* MAIN HIGHLIGHT - Multi-Turn Workflow */}
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '3px solid #dc2626', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⚠️</span>
              <h3 style={{ color: '#dc2626', margin: 0, fontSize: '1.35rem', fontWeight: 700 }}>Multi-Turn Workflow Requires Restarting the CLI Between Turns</h3>
            </div>
            
            <p style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '8px', color: '#991b1b', fontWeight: 600, marginBottom: '1.5rem' }}>
              <strong>⚡ Key Takeaway:</strong> The current multi-turn workflow requires quitting and restarting the CLI between turns to maintain stability.
            </p>

            <p><strong>Issue:</strong> In some cases, attempting to proceed directly to a second (or later) turn within the same CLI session can result in unstable behavior, including VS Code or tmux inconsistencies.</p>

            <p style={{ marginTop: '1rem' }}><strong>Workaround (Confirmed Working):</strong> Explicitly exit and relaunch the CLI tool between turns using the <code>--continue</code> flag.</p>

            <div style={{ position: 'relative', paddingBottom: '64.86%', height: 0, marginTop: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
              <iframe 
                src="https://www.loom.com/embed/6537574a3bb64ee0aba07dcf2feca433" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>

            <p style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600, fontSize: '1.1rem' }}>Recommended Multi-Turn Process:</p>
            <ol>
              <li>Start the CLI tool normally:
                <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  {`./claude-hfi --vscode`}
                </pre>
              </li>
              <li>Complete the first turn as usual:
                <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  <li>Review both trajectories</li>
                  <li>Submit preference feedback</li>
                  <li>Press Enter on "submit feedback"</li>
                </ul>
              </li>
              <li><strong style={{ color: '#dc2626' }}>Do not enter a second-turn prompt.</strong> When prompted for the next turn, immediately exit the tool:
                <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  {`Ctrl + C`}
                </pre>
              </li>
              <li>Relaunch the CLI using the continue flag:
                <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  {`./claude-hfi --vscode --continue`}
                </pre>
              </li>
              <li>Enter the second-turn prompt and complete the turn normally.</li>
              <li>After submitting feedback for that turn, again:
                <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  <li>Press <code>Ctrl + C</code> to exit</li>
                  <li>Relaunch with <code>--continue</code></li>
                </ul>
              </li>
              <li>Repeat this exit → relaunch cycle for as many turns as necessary.</li>
            </ol>

            <p style={{ marginTop: '1.5rem' }}><strong>Additional Notes:</strong></p>
            <ul>
              <li>tmux sessions generally persist correctly across restarts when using <code>--continue</code>.</li>
              <li>Any VS Code instability observed during this process may be environment-specific rather than tool-related.</li>
              <li>If unexpected tmux behavior occurs, verify session attachment using:
                <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginTop: '0.5rem' }}>
                  {`tmux display-message -p '#S'`}
                </pre>
              </li>
            </ul>
          </div>

          {/* Issue 1 */}
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #dc2626' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>VS Code Window Closes After Launching the CLI</h3>
            
            <p><strong>Issue:</strong> When launching the CLI tool, two VS Code windows (Trajectory A and Trajectory B) briefly open, but one of them closes automatically, leaving only one trajectory visible.</p>
            
            <p style={{ marginTop: '1rem' }}><strong>Observed Behavior:</strong></p>
            <ul>
              <li>Both VS Code windows initially open as expected.</li>
              <li>Shortly after launch, either Trajectory A or Trajectory B closes.</li>
              <li>This behavior did not occur in earlier versions of the tool.</li>
              <li>The issue has been observed across multiple submissions.</li>
            </ul>

            <p style={{ marginTop: '1rem' }}><strong>Known Context:</strong></p>
            <ul>
              <li>VS Code was fully closed prior to running the CLI (closed via <code>Cmd + Q</code> on macOS).</li>
              <li>It is unclear whether this behavior is caused by local VS Code settings or the CLI tool itself.</li>
            </ul>

            <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Workaround:</strong></p>
            <ol>
              <li>Open a new VS Code window manually: <code>File → New Window</code></li>
              <li>Then: <code>File → Open Folder</code></li>
              <li>Navigate to the trajectory worktree, typically located at:</li>
            </ol>
            <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginTop: '0.5rem' }}>
              {`~/.cache/claude-hfi/<project-path>/A`}
            </pre>
            <p>or</p>
            <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
              {`~/.cache/claude-hfi/<project-path>/B`}
            </pre>
            <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af', marginTop: '1rem' }}>
              Both worktrees are still created correctly, even if one window closes automatically.
            </p>
          </div>

          {/* Issue 2 */}
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #dc2626' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>Lost Main Terminal Session During Execution</h3>
            
            <p><strong>Issue:</strong> The main CLI terminal session is lost or closed during execution, but:</p>
            <ul>
              <li>VS Code windows remain open</li>
              <li>tmux sessions are still attached and running</li>
            </ul>

            <p style={{ marginTop: '1rem' }}><strong>Recommended Solution:</strong> Use the CLI's continue option to resume from the latest state.</p>
            <p>Run the following command from the repository root:</p>
            <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
              {`./claude-hfi --continue --vscode`}
            </pre>

            <p style={{ marginTop: '1rem' }}><strong>Notes:</strong></p>
            <ul>
              <li>The <code>--continue</code> flag must be used together with <code>--vscode</code>.</li>
              <li>Running <code>./claude-hfi --continue</code> without <code>--vscode</code> may result in a "No such file or directory" error, even if the binary exists.</li>
              <li>This command resumes from the most recent saved state and does not require restarting the task from the beginning.</li>
            </ul>
          </div>

          {/* Issue 3 */}
          <div style={{ backgroundColor: '#fef2f2', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #dc2626' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>Verifying You Are Attached to the Correct tmux Session</h3>
            
            <p>If you are unsure whether a VS Code terminal is attached to the correct tmux session, run the following command inside each trajectory terminal:</p>
            <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
              {`tmux display-message -p '#S'`}
            </pre>

            <p style={{ marginTop: '1rem' }}>This prints the current tmux session name, allowing you to confirm whether you are attached to:</p>
            <ul>
              <li>the Trajectory A session, or</li>
              <li>the Trajectory B session</li>
            </ul>
            <p style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '6px', color: '#1e40af', marginTop: '1rem' }}>
              This can be useful when reconnecting after interruptions or reopening VS Code windows.
            </p>
          </div>

        </section>

      </main>

      <footer className="content-card-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CLI;
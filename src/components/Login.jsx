import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './ContentCards.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState('google'); // 'google', 'email-link', 'password'
  
  const { loginWithPassword, sendLoginLink, loginWithGoogle, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      onLoginSuccess();
    }
  }, [currentUser, onLoginSuccess]);

  async function handleGoogleLogin() {
    setError('');
    try {
      setLoading(true);
      await loginWithGoogle();
      onLoginSuccess();
    } catch (err) {
      setError(err.message || 'Failed to sign in with Google');
    }
    setLoading(false);
  }

  async function handleEmailLinkLogin(e) {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      setLoading(true);
      await sendLoginLink(email);
      setMessage('Check your email for the login link!');
    } catch (err) {
      setError(err.message || 'Failed to send login link');
    }
    setLoading(false);
  }

  async function handlePasswordLogin(e) {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await loginWithPassword(email, password);
      onLoginSuccess();
    } catch (err) {
      setError(err.message || 'Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '0.5rem' }}>Marlin Training Hub</h1>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem' }}>Sign in to access the platform</p>
        
        {error && (
          <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        {message && (
          <div style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            {message}
          </div>
        )}

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#ffffff',
            color: '#333333',
            border: '1px solid #dadce0',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
          </svg>
          Sign in with Google
        </button>

        <div style={{ textAlign: 'center', color: '#94a3b8', margin: '1rem 0', fontSize: '0.875rem' }}>
          — or —
        </div>

        {/* Login Method Tabs */}
        <div style={{ display: 'flex', marginBottom: '1rem', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <button
            onClick={() => setLoginMethod('email-link')}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: 'none',
              backgroundColor: loginMethod === 'email-link' ? '#1e40af' : '#ffffff',
              color: loginMethod === 'email-link' ? '#ffffff' : '#64748b',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Email Link
          </button>
          <button
            onClick={() => setLoginMethod('password')}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: 'none',
              backgroundColor: loginMethod === 'password' ? '#1e40af' : '#ffffff',
              color: loginMethod === 'password' ? '#ffffff' : '#64748b',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Password
          </button>
        </div>

        {/* Email Link Form */}
        {loginMethod === 'email-link' && (
          <form onSubmit={handleEmailLinkLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#334155' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@snorkel.ai"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#1e40af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Sending...' : 'Send Login Link'}
            </button>
          </form>
        )}

        {/* Password Form */}
        {loginMethod === 'password' && (
          <form onSubmit={handlePasswordLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#334155' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@snorkel.ai"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#334155' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#1e40af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
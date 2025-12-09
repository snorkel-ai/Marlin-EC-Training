import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

const actionCodeSettings = {
  url: window.location.origin + '/Marlin-EC-Training/',
  handleCodeInApp: true
};

const googleProvider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function isWhitelisted(email) {
    try {
      const q = query(
        collection(db, 'whitelist'),
        where('email', '==', email.toLowerCase())
      );
      const snapshot = await getDocs(q);
      return !snapshot.empty;
    } catch (err) {
      console.error('Whitelist check failed:', err);
      return false;
    }
  }

  // Email/Password login
  async function loginWithPassword(email, password) {
    setError('');
    // Whitelist will be enforced in onAuthStateChanged
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Email link login
  async function sendLoginLink(email) {
    setError('');
    // Optional: pre-check whitelist before sending link
    const allowed = await isWhitelisted(email);
    if (!allowed) {
      throw new Error('This email is not authorized to access this platform.');
    }
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
  }

  async function completeSignIn() {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      
      const result = await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');

      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);

      // Whitelist enforcement happens in onAuthStateChanged
      return result;
    }
    return null;
  }

  // Google Sign-In
  async function loginWithGoogle() {
    setError('');
    // Whitelist enforcement happens in onAuthStateChanged
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    return signOut(auth);
  }

  // Check for email link on page load
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      completeSignIn().catch(err => {
        console.error('Sign in failed:', err);
        setError(err.message);
      });
    }
  }, []);

  // Centralized whitelist enforcement
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      if (!user) {
        setCurrentUser(null);
        setLoading(false);
        return;
      }

      try {
        const allowed = await isWhitelisted(user.email);
        if (allowed) {
          setCurrentUser(user);
          setError('');
        } else {
          await signOut(auth);
          setCurrentUser(null);
          setError('This email is not authorized to access this platform.');
        }
      } catch (err) {
        console.error('Whitelist check failed:', err);
        await signOut(auth);
        setCurrentUser(null);
        setError('Failed to verify access. Please try again later.');
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loginWithPassword,
    sendLoginLink,
    completeSignIn,
    loginWithGoogle,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {/* App only renders once auth + whitelist check are done */}
      {!loading && children}
    </AuthContext.Provider>
  );
}

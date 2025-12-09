import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signOut, 
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

const actionCodeSettings = {
  url: window.location.origin + '/Marlin-EC-Training/',
  handleCodeInApp: true
};

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

  async function sendLoginLink(email) {
    setError('');
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
      
      const allowed = await isWhitelisted(email);
      if (!allowed) {
        await signOut(auth);
        throw new Error('This email is not authorized to access this platform.');
      }
      
      return result;
    }
    return null;
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      completeSignIn().catch(err => {
        console.error('Sign in failed:', err);
        setError(err.message);
      });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    sendLoginLink,
    completeSignIn,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
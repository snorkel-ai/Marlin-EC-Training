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
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function getWhitelistAndRole(email) {
    try {
      const q = query(
        collection(db, 'whitelist'),
        where('email', '==', email.toLowerCase())
      );
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.error("User is not in whitelist, access denied");
        return { allowed: false, role: null };
      }
      
      const doc = snapshot.docs[0];
      const data = doc.data();
      return { allowed: true, role: data.role || null };
      
    } catch (err) {
      console.error('Whitelist check failed:', err);
      return { allowed: false, role: null };
    }
  }

  // Email/Password login
  async function loginWithPassword(email, password) {
    setError('');
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Email link login
  async function sendLoginLink(email) {
    setError('');
    const { allowed } = await getWhitelistAndRole(email);
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
      window.history.replaceState({}, document.title, window.location.pathname);
      return result;
    }
    return null;
  }

  // Google Sign-In
  async function loginWithGoogle() {
    setError('');
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    setUserRole(null);
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

  // Centralized whitelist + role check on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      if (!user) {
        setCurrentUser(null);
        setUserRole(null);
        setLoading(false);
        return;
      }

      try {
        const { allowed, role } = await getWhitelistAndRole(user.email);
        
        if (allowed) {
          setCurrentUser(user);
          setUserRole(role);
          setError('');
        } else {
          await signOut(auth);
          setCurrentUser(null);
          setUserRole(null);
          setError('This email is not authorized to access this platform.');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        await signOut(auth);
        setCurrentUser(null);
        setUserRole(null);
        setError('Failed to verify access. Please try again later.');
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRole,
    loginWithPassword,
    sendLoginLink,
    completeSignIn,
    loginWithGoogle,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
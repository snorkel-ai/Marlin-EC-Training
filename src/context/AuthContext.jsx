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
  const [userRoles, setUserRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function getWhitelistAndRoles(email) {
    try {
      const q = query(
        collection(db, 'whitelist'),
        where('email', '==', email.toLowerCase())
      );
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.error("User is not in whitelist, access denied");
        return { allowed: false, roles: [] };
      }
      
      const doc = snapshot.docs[0];
      const data = doc.data();
      
      // Handle both string and array formats for role/roles
      const role = data.role || data.roles || [];
      const rolesArray = Array.isArray(role) ? role : (role ? [role] : []);
      
      return { allowed: true, roles: rolesArray };
      
    } catch (err) {
      console.error('Whitelist check failed:', err);
      return { allowed: false, roles: [] };
    }
  }

  // Helper function to check if user has a specific role
  function hasRole(role) {
    return userRoles.includes(role);
  }

  // Helper function to check if user has any of the specified roles
  function hasAnyRole(roles) {
    return roles.some(role => userRoles.includes(role));
  }

  // Email/Password login
  async function loginWithPassword(email, password) {
    setError('');
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Email link login
  async function sendLoginLink(email) {
    setError('');
    const { allowed } = await getWhitelistAndRoles(email);
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
    setUserRoles([]);
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
        setUserRoles([]);
        setLoading(false);
        return;
      }

      try {
        const { allowed, roles } = await getWhitelistAndRoles(user.email);
        
        if (allowed) {
          setCurrentUser(user);
          setUserRoles(roles);
          setError('');
        } else {
          await signOut(auth);
          setCurrentUser(null);
          setUserRoles([]);
          setError('This email is not authorized to access this platform.');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        await signOut(auth);
        setCurrentUser(null);
        setUserRoles([]);
        setError('Failed to verify access. Please try again later.');
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRoles,
    hasRole,
    hasAnyRole,
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
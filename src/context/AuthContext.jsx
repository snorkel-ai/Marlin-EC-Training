import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();


const TIMEOUT_DURATION = 2 * 60 * 1000;

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function isWhitelisted(email) {
    try {
      const q = query(collection(db, 'whitelist'), where('email', '==', email.toLowerCase()));
      const snapshot = await getDocs(q);
      return !snapshot.empty;
    } catch (err) {
      console.error('Whitelist check failed:', err);
      return false;
    }
  }

  async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const allowed = await isWhitelisted(email);
    if (!allowed) {
      await signOut(auth);
      throw new Error('This email is not authorized to access this platform.');
    }
    return userCredential;
  }

  function logout() {
    return signOut(auth);
  }

  // Auto-logout after inactivity
  useEffect(() => {
    if (!currentUser) return;

    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        logout();
      }, TIMEOUT_DURATION);
    };

    // Reset timeout on user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimeout));

    // Start the timeout
    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const allowed = await isWhitelisted(user.email);
        if (allowed) {
          setCurrentUser(user);
        } else {
          await signOut(auth);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if email is whitelisted
  async function isWhitelisted(email) {
    const q = query(collection(db, 'whitelist'), where('email', '==', email.toLowerCase()));
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  }

  // Sign up (with whitelist check)
  async function signup(email, password) {
    const allowed = await isWhitelisted(email);
    if (!allowed) {
      throw new Error('This email is not authorized to access this platform.');
    }
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login (with whitelist check)
  async function login(email, password) {
    const allowed = await isWhitelisted(email);
    if (!allowed) {
      throw new Error('This email is not authorized to access this platform.');
    }
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Double-check whitelist on auth state change
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
    signup,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
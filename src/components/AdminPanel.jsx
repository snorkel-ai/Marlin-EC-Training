import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

const ROLES = [
  { value: '', label: 'Contributor', color: '#64748b', desc: 'Regular contributor (default)' },
  { value: 'swe', label: 'SWE', color: '#2563eb', desc: 'Software engineer' },
  { value: 'generalist', label: 'Generalist', color: '#7c3aed', desc: 'LLM reviewer' },
];

// Admin shown in display but not assignable via UI (must be set in Firestore + security rules)
const ALL_ROLES = [
  ...ROLES,
  { value: 'admin', label: 'Admin', color: '#dc2626', desc: 'Full access + user management' },
];

export default function AdminPanel({ onNavigate }) {
  const { userRoles, hasRole, currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bulkEmails, setBulkEmails] = useState('');
  const [bulkRole, setBulkRole] = useState('');
  const [singleEmail, setSingleEmail] = useState('');
  const [singleRole, setSingleRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [activeTab, setActiveTab] = useState('single');

  // Check if current user is admin
  if (!hasRole('admin')) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
        <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Access Denied</h2>
          <p>You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  // Fetch all whitelisted users
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, 'whitelist'));
      const userList = snapshot.docs.map(doc => ({
        id: doc.id,
        email: doc.data().email,
        role: doc.data().role || ''
      }));
      setUsers(userList.sort((a, b) => a.email.localeCompare(b.email)));
    } catch (err) {
      console.error('Failed to fetch users:', err);
      showMessage('error', 'Failed to load users');
    } finally {
      setLoading(false);
    }
  }

  function showMessage(type, text) {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 4000);
  }

  async function addSingleUser() {
    const email = singleEmail.trim().toLowerCase();
    if (!email) return showMessage('error', 'Please enter an email');
    if (!email.includes('@')) return showMessage('error', 'Invalid email format');
    if (users.find(u => u.email === email)) {
      return showMessage('error', 'User already exists');
    }

    try {
      const docData = { email };
      if (singleRole) docData.role = singleRole;
      
      const docRef = await addDoc(collection(db, 'whitelist'), docData);
      setUsers([...users, { id: docRef.id, email, role: singleRole }].sort((a, b) => a.email.localeCompare(b.email)));
      setSingleEmail('');
      showMessage('success', `Added ${email}`);
    } catch (err) {
      console.error('Failed to add user:', err);
      showMessage('error', 'Failed to add user');
    }
  }

  async function addBulkUsers() {
    const emails = bulkEmails
      .split(/[\n,]/)
      .map(e => e.trim().toLowerCase())
      .filter(e => e && e.includes('@'));

    if (emails.length === 0) {
      return showMessage('error', 'No valid emails found');
    }

    const existing = emails.filter(e => users.find(u => u.email === e));
    const newEmails = emails.filter(e => !users.find(u => u.email === e));

    if (newEmails.length === 0) {
      return showMessage('error', 'All emails already exist');
    }

    try {
      const batch = writeBatch(db);
      const newUsers = [];

      for (const email of newEmails) {
        const docRef = doc(collection(db, 'whitelist'));
        const docData = { email };
        if (bulkRole) docData.role = bulkRole;
        batch.set(docRef, docData);
        newUsers.push({ id: docRef.id, email, role: bulkRole });
      }

      await batch.commit();
      setUsers([...users, ...newUsers].sort((a, b) => a.email.localeCompare(b.email)));
      setBulkEmails('');

      const msg = existing.length > 0
        ? `Added ${newEmails.length} users (${existing.length} already existed)`
        : `Added ${newEmails.length} users`;
      showMessage('success', msg);
    } catch (err) {
      console.error('Bulk add failed:', err);
      showMessage('error', 'Failed to add users');
    }
  }

  async function removeUser(userId, email) {
    // Prevent removing yourself
    if (email === currentUser?.email) {
      return showMessage('error', "You can't remove yourself");
    }

    try {
      await deleteDoc(doc(db, 'whitelist', userId));
      setUsers(users.filter(u => u.id !== userId));
      showMessage('success', `Removed ${email}`);
    } catch (err) {
      console.error('Failed to remove user:', err);
      showMessage('error', 'Failed to remove user');
    }
  }

  async function updateRole(userId, email, newRole) {
    // Prevent removing your own admin role
    if (email === currentUser?.email && newRole !== 'admin') {
      return showMessage('error', "You can't remove your own admin role");
    }

    try {
      const docRef = doc(db, 'whitelist', userId);
      if (newRole) {
        await updateDoc(docRef, { role: newRole });
      } else {
        await updateDoc(docRef, { role: '' });
      }
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
      showMessage('success', `Updated role for ${email}`);
    } catch (err) {
      console.error('Failed to update role:', err);
      showMessage('error', 'Failed to update role');
    }
  }

  const getRoleStyle = (role) => {
    // Handle array roles - get first role for styling
    const roleValue = Array.isArray(role) ? role[0] || '' : role;
    const r = ALL_ROLES.find(x => x.value === roleValue) || ALL_ROLES[0];
    return { backgroundColor: r.color + '20', color: r.color, border: `1px solid ${r.color}40` };
  };

  const getRoleDisplay = (role) => {
    // Handle array roles for display
    if (Array.isArray(role)) {
      return role.length > 0 ? role.join(', ') : 'Contributor';
    }
    return role || 'Contributor';
  };

  const filteredUsers = users.filter(u => {
    const searchLower = searchTerm.toLowerCase();
    const emailMatch = u.email.toLowerCase().includes(searchLower);
    const roleStr = Array.isArray(u.role) ? u.role.join(' ') : (u.role || 'contributor');
    const roleMatch = roleStr.toLowerCase().includes(searchLower);
    return emailMatch || roleMatch;
  });

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
        <p style={{ color: '#64748b' }}>Loading users...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => onNavigate('home')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1e40af',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              padding: '0',
              marginBottom: '1rem'
            }}
          >
            ← Back to Home
          </button>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b' }}>
            🛡️ User Management
          </h1>
          <p style={{ color: '#64748b', marginTop: '0.25rem' }}>Add and manage whitelisted users</p>
        </div>

        {message.text && (
          <div style={{
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: message.type === 'success' ? '#16a34a' : '#dc2626'
          }}>
            {message.text}
          </div>
        )}

        {/* Add Users Card */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <button
              onClick={() => setActiveTab('single')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                backgroundColor: activeTab === 'single' ? '#1e40af' : '#f1f5f9',
                color: activeTab === 'single' ? '#fff' : '#64748b'
              }}
            >
              ➕ Add Single User
            </button>
            <button
              onClick={() => setActiveTab('bulk')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                backgroundColor: activeTab === 'bulk' ? '#1e40af' : '#f1f5f9',
                color: activeTab === 'bulk' ? '#fff' : '#64748b'
              }}
            >
              📤 Bulk Import
            </button>
          </div>

          {activeTab === 'single' ? (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={singleEmail}
                onChange={e => setSingleEmail(e.target.value)}
                placeholder="email@example.com"
                style={{ flex: '1', minWidth: '200px', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                onKeyDown={e => e.key === 'Enter' && addSingleUser()}
              />
              <select
                value={singleRole}
                onChange={e => setSingleRole(e.target.value)}
                style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', minWidth: '140px' }}
              >
                {ROLES.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <button
                onClick={addSingleUser}
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
              >
                Add User
              </button>
            </div>
          ) : (
            <div>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                Paste emails separated by commas or new lines
              </p>
              <textarea
                value={bulkEmails}
                onChange={e => setBulkEmails(e.target.value)}
                placeholder={"user1@example.com\nuser2@company.com\nuser3@org.net"}
                rows={5}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
              />
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Assign role:</span>
                <select
                  value={bulkRole}
                  onChange={e => setBulkRole(e.target.value)}
                  style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                >
                  {ROLES.map(r => (
                    <option key={r.value} value={r.value}>{r.label} - {r.desc}</option>
                  ))}
                </select>
                <button
                  onClick={addBulkUsers}
                  style={{ padding: '0.75rem 1.5rem', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', marginLeft: 'auto' }}
                >
                  Import All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User List Card */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>
              👥 Whitelisted Users ({users.length})
            </h2>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="🔍 Search users..."
              style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.875rem', width: '200px' }}
            />
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.875rem' }}>Email</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.875rem' }}>Role</th>
                  <th style={{ textAlign: 'right', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.875rem' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                      {user.email}
                      {user.email === currentUser?.email && (
                        <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>(you)</span>
                      )}
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      {Array.isArray(user.role) ? (
                        // Display-only for array roles (multiple roles)
                        <span style={{
                          padding: '0.35rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          ...getRoleStyle(user.role)
                        }}>
                          {getRoleDisplay(user.role)}
                        </span>
                      ) : (
                        // Editable dropdown for single roles
                        <select
                          value={user.role}
                          onChange={e => updateRole(user.id, user.email, e.target.value)}
                          style={{
                            padding: '0.35rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            ...getRoleStyle(user.role)
                          }}
                        >
                          {ROLES.map(r => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                          ))}
                        </select>
                      )}
                    </td>
                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                      <button
                        onClick={() => removeUser(user.id, user.email)}
                        style={{ 
                          padding: '0.4rem 0.6rem', 
                          backgroundColor: '#fee2e2', 
                          color: '#dc2626', 
                          border: 'none', 
                          borderRadius: '4px', 
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}
                        title="Remove user"
                      >
                        🗑️ Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={3} style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                      {searchTerm ? 'No users match your search' : 'No users added yet'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
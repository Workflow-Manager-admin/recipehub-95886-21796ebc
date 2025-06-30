import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import './LoginModal.css';

// PUBLIC_INTERFACE
function LoginModal({ open, onClose }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  if (!open) return null;

  const onInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PUBLIC_INTERFACE
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      onClose();
    } catch (e) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="modal-bg" tabIndex={-1} aria-modal="true" role="dialog">
      <div className="modal login-modal">
        <button className="modal-close" aria-label="Close login modal" onClick={onClose}>×</button>
        <h2>Sign In</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="username"
            required
            value={form.email}
            onChange={onInput}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={form.password}
            onChange={onInput}
          />
          {error && <div className="auth-error">{error}</div>}
          <button className="auth-btn" type="submit">Sign In</button>
        </form>
        <div className="modal-alt">Demo login: any email/password!</div>
      </div>
    </div>
  );
}

export default LoginModal;

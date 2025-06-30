import React from 'react';
import { useAuth } from '../auth/AuthContext';
import './Header.css';

// PUBLIC_INTERFACE
function Header({ onAddRecipe, onShowLogin, onToggleSidebar }) {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="header">
      <button className="sidebar-btn mobile-only" onClick={onToggleSidebar} aria-label="Open menu">
        &#9776;
      </button>
      <span className="logo">
        <span>🍽️</span> RecipeHub
      </span>
      <nav className="nav">
        <button className="add-btn" onClick={onAddRecipe}>
          ＋ Add Recipe
        </button>
        {isAuthenticated ? (
          <>
            <span className="user-greeting">Hi, {user.displayName || user.email}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="login-btn" onClick={onShowLogin}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;

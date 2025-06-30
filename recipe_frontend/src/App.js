import React, { useState, useEffect } from 'react';
import { AuthProvider } from './auth/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeGrid from './components/RecipeGrid';
import LoginModal from './components/LoginModal';
import RecipeModal from './components/RecipeModal';

import './App.css';

// PUBLIC_INTERFACE
function App() {
  // Handles modal states and mobile sidebar for basic app structure
  const [showLogin, setShowLogin] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set light theme and CSS vars for custom card design
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.style.background = 'var(--bg-primary)';
  }, []);

  // PUBLIC_INTERFACE
  const openEditRecipe = (recipeData) => {
    setEditRecipe(recipeData);
    setShowRecipeModal(true);
  }

  // PUBLIC_INTERFACE
  const openLogin = () => setShowLogin(true);

  // PUBLIC_INTERFACE
  const closeModals = () => {
    setShowLogin(false);
    setShowRecipeModal(false);
    setEditRecipe(null);
  }

  return (
    <AuthProvider>
      <div className="main-app-layout">
        <Header 
          onAddRecipe={() => setShowRecipeModal(true)} 
          onShowLogin={openLogin} 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="main-content-outer">
          <Sidebar 
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <main className="main-content">
            <RecipeGrid 
              onEditRecipe={openEditRecipe}
            />
          </main>
        </div>
        <LoginModal open={showLogin} onClose={closeModals} />
        <RecipeModal 
          open={showRecipeModal}
          onClose={closeModals}
          editRecipe={editRecipe}
        />
      </div>
    </AuthProvider>
  );
}

export default App;

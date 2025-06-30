import React, { useContext, useState, useEffect, useMemo } from 'react';

// Dummy authentication and favorites for local demo

const AuthContext = React.createContext();

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const fav = localStorage.getItem('favoriteIds');
    return fav ? JSON.parse(fav) : [];
  });

  // PUBLIC_INTERFACE
  const login = async (email, password) => {
    setUser({ email, displayName: email.split("@")[0] });
    // Normally would handle password, but demo is open
  };
  // PUBLIC_INTERFACE
  const logout = () => setUser(null);

  // PUBLIC_INTERFACE
  function toggleFavorite(recipeId) {
    let fav = [...favoriteIds];
    if (fav.includes(recipeId))
      fav = fav.filter(id => id !== recipeId);
    else
      fav.push(recipeId);
    setFavoriteIds(fav);
    localStorage.setItem('favoriteIds', JSON.stringify(fav));
  }

  // Keep favorites synced locally
  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    login,
    logout,
    favoriteIds,
    toggleFavorite
  }), [user, favoriteIds]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  return useContext(AuthContext);
}

import React from 'react';
import './RecipeCard.css';
import { useAuth } from '../auth/AuthContext';

// PUBLIC_INTERFACE
function RecipeCard({ recipe, onEdit }) {
  const { isAuthenticated, favoriteIds, toggleFavorite } = useAuth();
  const isFavorite = favoriteIds.includes(recipe.id);

  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.alt}
        className="card-image"
        loading="lazy"
      />
      <div className="card-texts">
        <h3 className="card-title">{recipe.title}</h3>
        <div className="card-desc">{recipe.description}</div>
        <div className="card-badges">
          {recipe.badges.map(badge => (
            <span className={`badge badge-${badge.toLowerCase().replace(/[^a-z]/g,'')}`} key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <div className="card-actions">
          {isAuthenticated && (
            <button
              className={`fav-btn${isFavorite ? ' active' : ''}`}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              onClick={() => toggleFavorite(recipe.id)}
            >
              {isFavorite ? '★' : '☆'}
            </button>
          )}
          {isAuthenticated && (
            <button className="edit-btn" onClick={onEdit} aria-label="Edit recipe">
              ✍️ Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;

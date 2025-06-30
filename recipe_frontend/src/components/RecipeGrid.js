import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../sampleRecipes';

// PUBLIC_INTERFACE
function RecipeGrid({ onEditRecipe }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // For the MVP, use local recipes. Could later fetch from backend.
  const filterRecipes = () => {
    let recs = sampleRecipes;
    if (filter !== 'all') {
      recs = recs.filter(r =>
        r.badges.map(b => b.toLowerCase()).includes(filter)
      );
    }
    if (query) {
      recs = recs.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    return recs;
  };

  const recipesToShow = filterRecipes();

  return (
    <div className="recipe-grid-outer">
      <SearchBar 
        value={query}
        onChange={setQuery}
        filter={filter}
        onFilter={setFilter}
      />
      <div className="recipe-grid">
        {recipesToShow.length === 0 ? (
          <div className="empty-hint">No recipes found.</div>
        ) : (
          recipesToShow.map(recipe =>
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onEdit={() => onEditRecipe(recipe)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RecipeGrid;

import React from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
function SearchBar({ value, onChange, filter, onFilter }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Search recipes..."
        className="search-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search recipes"
      />
      <select
        className="filter-dropdown"
        value={filter}
        onChange={e => onFilter(e.target.value)}
        aria-label="Filter recipes"
      >
        <option value="all">All</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="healthy">Healthy</option>
        <option value="asian">Asian</option>
        <option value="familyfavorite">Family Favorite</option>
        <option value="quick">Quick & Easy</option>
      </select>
    </div>
  );
}

export default SearchBar;

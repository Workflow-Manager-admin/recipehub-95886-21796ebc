import React from 'react';
import './Sidebar.css';

// PUBLIC_INTERFACE
function Sidebar({ open, onClose }) {
  return (
    <nav className={`sidebar${open ? ' open' : ''}`}>
      <button className="close-btn mobile-only" onClick={onClose}>×</button>
      <div className="section-title">Browse</div>
      <ul>
        <li><a href="#">All Recipes</a></li>
        <li><a href="#">Favorites</a></li>
        <li><a href="#">Vegetarian</a></li>
        <li><a href="#">Quick & Easy</a></li>
        <li><a href="#">Healthy</a></li>
        <li><a href="#">Asian</a></li>
      </ul>
      <div className="section-title">About</div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;

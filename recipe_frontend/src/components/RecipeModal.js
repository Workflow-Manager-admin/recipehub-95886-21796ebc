import React, { useState, useEffect } from 'react';
import './RecipeModal.css';

// PUBLIC_INTERFACE
function RecipeModal({ open, onClose, editRecipe }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    badges: '',
    image: '',
    alt: '',
  });

  useEffect(() => {
    if (editRecipe) {
      setForm({
        ...editRecipe,
        badges: editRecipe.badges.join(', '),
      });
    } else {
      setForm({
        title: '',
        description: '',
        badges: '',
        image: '',
        alt: '',
      });
    }
  }, [editRecipe, open]);

  if (!open) return null;

  // For demo, only logs, in production would mutate backend/db or setRecipes
  function submitRecipe(e) {
    e.preventDefault();
    // submit... 
    onClose();
  }

  return (
    <div className="modal-bg" tabIndex={-1} aria-modal="true" role="dialog">
      <div className="modal recipe-modal">
        <button className="modal-close" aria-label="Close recipe modal" onClick={onClose}>×</button>
        <h2>{editRecipe ? "Edit" : "Add"} Recipe</h2>
        <form className="recipe-form" onSubmit={submitRecipe}>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            type="text"
            name="badges"
            placeholder="Badges (comma separated)"
            value={form.badges}
            onChange={e => setForm({ ...form, badges: e.target.value })}
          />
          <input
            type="text"
            name="image"
            placeholder="Image path (e.g., /assets/images/Berry_Smoothie_Bowl.jpg)"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
            required
          />
          <input
            type="text"
            name="alt"
            placeholder="Image alt text"
            value={form.alt}
            onChange={e => setForm({ ...form, alt: e.target.value })}
            required
          />
          <button className="submit-btn" type="submit">
            {editRecipe ? "Save Changes" : "Add Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipeModal;

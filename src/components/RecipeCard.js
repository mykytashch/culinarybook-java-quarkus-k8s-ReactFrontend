import React from 'react';

function RecipeCard({ title, description, image }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default RecipeCard;

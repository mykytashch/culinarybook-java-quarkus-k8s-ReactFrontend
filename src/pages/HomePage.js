import React from 'react';
import Navbar from '../components/Navbar';
import RecipeCard from '../components/RecipeCard';

function HomePage() {
    // Пример данных, которые могли бы быть получены из API:
    const recipes = [
        { id: 1, title: "Recipe 1", description: "Description 1", image: "/path/to/image1.jpg" },
        // ... другие рецепты
    ];

    return (
        <div>
            <Navbar />
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </div>
    );
}

export default HomePage;

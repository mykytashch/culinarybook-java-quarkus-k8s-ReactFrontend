import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/recipes">Recipes</a>
            <a href="/profile">Profile</a>
            <a href="/search">Search</a>
        </nav>
    );
}

export default Navbar;

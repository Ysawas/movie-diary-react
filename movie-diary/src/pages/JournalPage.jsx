import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { getFavorites, removeFromFavorites } from "../utils/storage";

const JournalPage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const handleRemoveFromFavorites = (movieId) => {
        removeFromFavorites(movieId);
        setFavorites(getFavorites());
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="journal-header">Your Movie Journal</h1>
                {favorites.length > 0 ? (
                    <div className="grid">
                        {favorites.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onRemoveFromFavorites={handleRemoveFromFavorites}
                                showAddToFavorites={false} // Hides "Add to Favorites" button
                            />
                        ))}
                    </div>
                ) : (
                    <p className="journal-empty">No favorite movies yet!</p>
                )}
            </div>
        </div>
    );
};

export default JournalPage;

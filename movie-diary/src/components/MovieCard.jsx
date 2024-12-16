import React from "react";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../utils/storage";

function MovieCard({ movie, onAddToFavorites, onRemoveFromFavorites, showAddToFavorites = true }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    const handleAddToFavorites = (e) => {
        e.stopPropagation();
        addToFavorites(movie);
        if (onAddToFavorites) onAddToFavorites(movie);
    };

    const handleRemoveFromFavorites = (e) => {
        e.stopPropagation();
        removeFromFavorites(movie.id);
        if (onRemoveFromFavorites) onRemoveFromFavorites(movie.id);
    };

    return (
        <div className="movie-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-card-img"
            />
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-release">{movie.release_date}</p>
            <div className="movie-card-actions">
                {showAddToFavorites && (
                    <button
                        onClick={handleAddToFavorites}
                        className="movie-card-button">
                        Add to Favorites
                    </button>
                )}
                {onRemoveFromFavorites && (
                    <button
                        onClick={handleRemoveFromFavorites}
                        className="movie-card-button remove">
                        Remove from Favorites
                    </button>
                )}
            </div>
        </div>
    );
}

export default MovieCard;

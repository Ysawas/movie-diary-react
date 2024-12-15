import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, onCardClick, onAddToFavorites }) {
    const navigate = useNavigate();
   const handleCardClick = (movieId) => {
    navigate(`/movies/${movieId}`);
};
    return (
        <div
            className="movie-card"
            onClick={handleCardClick}
            style={{ cursor: "pointer" }}
            //onClick={() => onCardClick && onCardClick(movie.id)}
            //style={{ cursor: onCardClick ? "pointer" : "default" }}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-card-img"
            />
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-release">{movie.release_date}</p>
            {onAddToFavorites && (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering onCardClick
                        onAddToFavorites(movie);
                    }}
                    className="movie-card-button"
                >
                    Add to Favorites
                </button>
            )}
        </div>
    );
}

export default MovieCard;

/*
import React from "react";

function MovieCard({ movie, onAddToFavorites }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition duration-300 hover:shadow-lg hover:scale-105">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-lg lazyload"
                loading="lazy"
            />
            <h3 className="font-bold mt-4 text-lg">{movie.title}</h3>
            <p className="text-gray-500">{movie.release_date}</p>
            <button
                onClick={() => onAddToFavorites(movie)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
            >
                Add to Favorites
            </button>
        </div>
    );
}

export default MovieCard;
*/
import React from "react";

function MovieCard({ movie, onCardClick, onAddToFavorites }) {
    return (
        <div
            className="movie-card"
            onClick={() => onCardClick && onCardClick(movie.id)}
            style={{ cursor: onCardClick ? "pointer" : "default" }}
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

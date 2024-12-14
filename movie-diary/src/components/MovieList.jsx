import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onAddToFavorites }) {
    if (movies.length === 0) {
        return <p className="text-center text-gray-500 mt-8">No movies to display</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onAddToFavorites={onAddToFavorites}
                />
            ))}
        </div>
    );
}

export default MovieList;
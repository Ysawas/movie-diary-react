import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { getFavorites } from "../utils/storage";

const API_KEY = "your_tmdb_api_key";
const API_URL = "https://api.themoviedb.org/3/movie";

const JournalPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const fetchMovieDetails = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            setSelectedMovie(data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
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
                                onCardClick={fetchMovieDetails}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="journal-empty">No favorite movies yet!</p>
                )}
                {selectedMovie && (
                    <div className="movie-details">
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.overview}</p>
                        <p>
                            <strong>Genres:</strong>{" "}
                            {selectedMovie.genres.map((g) => g.name).join(", ")}
                        </p>
                        <p>
                            <strong>Runtime:</strong> {selectedMovie.runtime} min
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JournalPage;

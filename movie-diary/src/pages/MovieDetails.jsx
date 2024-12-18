import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
    const { movieID } = useParams();
    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/movie/${movieID}?api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch movie details: ${response.statusText}`);
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieID]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="movie-details-container">
            <Link to="/" className="back-link">Back to Movies</Link>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
                alt={movie.title || "Movie Poster"}
                className="movie-details-img"
            />
            <div className="movie-details-content">
                <h1>{movie.title}</h1>
                <p><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
                <p><strong>Genres:</strong> {movie.genres?.map(genre => genre.name).join(", ") || "N/A"}</p>
                <p><strong>Overview:</strong> {movie.overview || "No overview available"}</p>
                <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} minutes` : "N/A"}</p>
                <p><strong>Rating:</strong> {movie.vote_average ? `${movie.vote_average} / 10` : "N/A"}</p>
            </div>
        </div>
    );
}

export default MovieDetails;



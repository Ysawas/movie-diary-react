/*
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY, API_URL } from "../utils/api.jsx";

function MovieDetails() {
    const { movieId } = useParams(); // Retrieve the dynamic segment from the URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/${movieId}?api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch movie details");
                }
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (loading) {
        return (
            <div className="loading">
                <p>Loading...</p>
                <img src="/loading-spinner.gif" alt="Loading spinner" />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
                <p>Ensure the movie ID is correct and the API key is valid.</p>
            </div>
        );
    }

    return (
        <div className="movie-details-container">
            <Link to="/" className="back-link">Back to Movies</Link>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
                alt={movie.title || "No title available"}
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
*/

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY, API_URL } from "../utils/api";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/${movieId}?api_key=${API_KEY}`);
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
    }, [movieId]);

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



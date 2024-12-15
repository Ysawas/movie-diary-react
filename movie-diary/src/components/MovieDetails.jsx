import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "6c3d8a34cebc413157a4082449463e55";
const API_URL = "https://api.themoviedb.org/3/movie";

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
        console.log("Movie ID:", movieId); // Check what value is passed
    }, [movieId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="movie-details-container">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-details-img"
            />
            <div className="movie-details-content">
                <h1>{movie.title}</h1>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
                <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
            </div>
        </div>
    );
}

export default MovieDetails;

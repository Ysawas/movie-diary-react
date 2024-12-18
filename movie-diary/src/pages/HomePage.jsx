// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import MovieDetails from "./MovieDetails";

const HomePage = () => {
    const movie = { title: "Inception", description: "A mind-bending thriller", image: "/path/to/image.jpg" };
    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY
    const SEARCH_URL = import.meta.env.VITE_SEARCH_URL
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies();
    }, []);
    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Error fetching popular movies:", error);
            alert("Failed to fetch popular movies. Please try again later.");
        }
    };

    const searchMovies = async (query) => {
        try {
            const response = await fetch(`${SEARCH_URL}${query}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Error searching for movies:", error);
            alert("Failed to search for movies. Please try again later.");
        }
    };

    return (
        <div>
            <h1>Welcome to Movie Diary</h1>
            <Navbar />
            <SearchBar onSearch={searchMovies} />
            <MovieList movies={movies} onAddToFavorites={(movie) => console.log("Add to favorites:", movie)} />
            <MovieDetails movie={movie} />
        </div>
    );
};

export default HomePage;

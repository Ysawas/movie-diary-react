// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { API_URL, SEARCH_URL } from "../utils/api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(API_URL);
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
            <Navbar />
            <SearchBar onSearch={searchMovies} />
            <MovieList movies={movies} onAddToFavorites={(movie) => console.log("Add to favorites:", movie)} />
        </div>
    );
};

export default HomePage;

import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JournalPage from "./pages/JournalPage";
import MovieDetails from "./pages/MovieDetails";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/movies/:movieID" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default App;

//<Route path="/movie-details" element={<MovieDetails movie={movie} />} />
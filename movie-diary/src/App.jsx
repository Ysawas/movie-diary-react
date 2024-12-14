import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JournalPage from "./pages/JournalPage";

function App() {
    return (
        <Router>
            <nav className="bg-blue-500 p-4">
                <div className="flex justify-between items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-white text-2xl font-bold underline" : "text-white text-2xl font-bold"}>Movie Diary</NavLink>
                    <NavLink to="/journal" className={({ isActive }) => isActive ? "text-white underline" : "text-white"}>Go to Journal</NavLink>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/journal" element={<JournalPage />} />
            </Routes>
        </Router>
    );
}

export default App;
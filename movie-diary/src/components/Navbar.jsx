// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-white text-2xl font-bold underline" : "text-white text-2xl font-bold"}>Movie Diary</NavLink>
                <NavLink to="/journal" className={({ isActive }) => isActive ? "text-white underline" : "text-white"}>Favorites Journal</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

// src/components/Navbar.js
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-bold">Movie Diary</a>
                <a href="/journal" className="text-white">Go to Journal</a>
            </div>
        </nav>
    );
};

export default Navbar;

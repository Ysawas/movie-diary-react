import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const debounceSearch = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedSearch = debounceSearch(handleSearch, 500);

    return (
        <div className="container mx-auto mt-8 text-center">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    debouncedSearch();
                }}
                className="p-2 border rounded-lg w-2/3"
                placeholder="Search for a movie..."
            />
            <button
                onClick={handleSearch}
                className="p-2 bg-blue-500 text-white rounded-lg mt-4"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

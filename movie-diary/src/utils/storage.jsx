/*
// Function to get favorites from local storage
export const getFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Function to add a movie to favorites in local storage
export const addToFavorites = (movie) => {
    const favorites = getFavorites();
    // Check if the movie is already in favorites
    if (!favorites.some(fav => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Save updated favorites
    }
   // const updatedFavorites = [...favorites, movie];
   // localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
/*
export const removeFavorite = (id) => {
    const favorites = getFavorites().filter((movie) => movie.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};
*/





// Utility functions to manage favorite movies in local storage

const FAVORITES_KEY = "favoriteMovies";

export const getFavorites = () => {
    try {
        const favorites = localStorage.getItem(FAVORITES_KEY);
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error("Error reading favorites from local storage:", error);
        return [];
    }
};

export const addToFavorites = (movie) => {
    try {
        const favorites = getFavorites();
        if (favorites.some((fav) => fav.id === movie.id)) {
            console.warn("Movie is already in favorites:", movie);
            return;
        }
        const updatedFavorites = [...favorites, movie];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
        console.error("Error adding movie to favorites:", error);
    }
};

export const removeFromFavorites = (movieId) => {
    try {
        const favorites = getFavorites();
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
        console.error("Error removing movie from favorites:", error);
    }
};

export const clearFavorites = () => {
    try {
        localStorage.removeItem(FAVORITES_KEY);
    } catch (error) {
        console.error("Error clearing favorites:", error);
    }
};

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const addFavorite = (movie) => {
    const favorites = getFavorites();
    const updatedFavorites = [...favorites, movie];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

export const removeFavorite = (id) => {
    const favorites = getFavorites().filter((movie) => movie.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMEalIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMEalIds((currentFavIds) => {
      return [...currentFavIds, id];
    });
  }

  function removeFavorite(id) {
    setFavoriteMEalIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id);
    });
  }

  const ctxValue = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={ctxValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

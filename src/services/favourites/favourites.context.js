import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (restaurants) => {
    try {
      const jsonValue = JSON.stringify(restaurants);
      await AsyncStorage.setItem("favourites", jsonValue);
    } catch (error) {
      console.log("error in saving", error);
    }
  };

  const loadFavourites = async () => {
    try {
      const restaurants = await AsyncStorage.getItem("favourites");
      if (restaurants !== null) {
        setFavourites(JSON.parse(restaurants));
      }
    } catch (error) {
      console.log("error in loading", error);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

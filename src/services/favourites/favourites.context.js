import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (restaurants, uid) => {
    try {
      const jsonValue = JSON.stringify(restaurants);
      await AsyncStorage.setItem(`favourites-${uid}`, jsonValue);
    } catch (error) {
      console.log("error in saving", error);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const restaurants = await AsyncStorage.getItem(`favourites-${uid}`);
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
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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

export default FavouritesContextProvider;

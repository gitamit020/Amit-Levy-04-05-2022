import { ADD_FAVORITE, CLEAR_FAVORITES, RMV_FAVORITE } from "../actionTypes";

export const addFavorite = (id, cityName, currentWeather, text) => ({
  type: ADD_FAVORITE,
  payload: {
    id,
    cityName,
    addedOn: Date.now(),
    currentWeather,
    text,
  },
});

export const rmvFavorite = (id) => ({
  type: RMV_FAVORITE,
  payload: {
    id,
  },
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

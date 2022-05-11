import { ADD_FAVORITE, CLEAR_FAVORITES, RMV_FAVORITE, SET_FAVORITES } from '../actionTypes';

export const addFavorite = (id, cityName, currentWeather, text) => ({
  type: ADD_FAVORITE,
  payload: {
    id,
    cityName,
    addedOn: Date.now(),
    currentWeather,
    text
  }
});

export const rmvFavorite = id => ({
  type: RMV_FAVORITE,
  payload: {
    id
  }
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES
});

export const setFavorites = updatedFavorites => ({
  type: SET_FAVORITES,
  payload: updatedFavorites
});

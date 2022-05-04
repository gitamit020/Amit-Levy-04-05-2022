import { ADD_FAVORITE, CLEAR_FAVORITES, RMV_FAVORITE } from "../actionTypes";

export const addFavorite = (id, cityName, addedOn, currentWeather) => ({
    type: ADD_FAVORITE,
    payload: {
        id,
        cityName,
        addedOn: Date.now(),
        currentWeather,
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

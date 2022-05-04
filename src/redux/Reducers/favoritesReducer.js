import { ADD_FAVORITE, CLEAR_FAVORITES, RMV_FAVORITE } from "../actionTypes";

const initialState = {
    favorites: [],
};

export function favoritesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return { ...state, favorites: [...initialState.favorites, payload] };
        case RMV_FAVORITE:
            const newFavorites = initialState.favorites.filter((fav) => fav.id !== payload.id);
            return { ...state, favorites: newFavorites };
        case CLEAR_FAVORITES:
            return { ...state, favorites: [] };
        default:
            return state;
    }
}

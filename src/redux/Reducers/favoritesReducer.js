import { ADD_FAVORITE, CLEAR_FAVORITES, RMV_FAVORITE } from "../actionTypes";

const initialState = {
    favorites: [],
};

export function favoritesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, payload] };
        case RMV_FAVORITE:
            const newFavorites = state.favorites.filter((fav) => fav.id !== payload.id);
            return { ...state, favorites: newFavorites };
        case CLEAR_FAVORITES:
            return { ...state, favorites: [] };
        default:
            return state;
    }
}

import { SET_CURRENT_CITY } from "../actionTypes";

const initialState = {
    currentCity: {},
};

export function currentCityReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CURRENT_CITY:
            return { ...state, currentCity: { ...payload } };
        default:
            return state;
    }
}

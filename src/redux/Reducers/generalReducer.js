import { CLEAR_ERROR_MSG, SET_CURRENT_GEO, SET_ERROR_MSG } from "../actionTypes";

const initialState = { errorMsg: "", currentLocation: "" };

export function generalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ERROR_MSG:
      return { ...state, errorMsg: payload };
    case CLEAR_ERROR_MSG:
      return { ...state, errorMsg: "" };
    case SET_CURRENT_GEO:
      return { ...state, currentLocation: payload };
    default:
      return state;
  }
}

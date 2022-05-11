import { DARK_MODE, LIGHT_MODE, TEMP_CELSIUS, TEMP_FAHRENHEIT } from "../../consts";
import { TOGGLE_TEMP_UNIT, TOGGLE_THEME } from "../actionTypes";

const initialState = {
  themeMode: LIGHT_MODE,
  tempUnit: TEMP_CELSIUS,
};

export function preferencesReducer(state = initialState, { type }) {
  switch (type) {
    case TOGGLE_THEME:
      return { ...state, themeMode: state.themeMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE };
    case TOGGLE_TEMP_UNIT:
      return {
        ...state,
        tempUnit: state.tempUnit === TEMP_CELSIUS ? TEMP_FAHRENHEIT : TEMP_CELSIUS,
      };
    default:
      return state;
  }
}

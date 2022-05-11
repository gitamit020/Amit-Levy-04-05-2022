import { TOGGLE_TEMP_UNIT, TOGGLE_THEME } from "../actionTypes";

export const toggleThemeMode = () => ({
  type: TOGGLE_THEME,
});

export const toggleTempUnit = () => ({
  type: TOGGLE_TEMP_UNIT,
});

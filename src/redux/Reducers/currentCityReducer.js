import {
  MOCK_CITY,
  MOCK_FORECAST,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_FORECAST,
} from "../actionTypes";

const initialState = {
  currentCity: MOCK_CITY,
  currentCityForecast: MOCK_FORECAST,
};

export function currentCityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_CITY:
      return { ...state, currentCity: { ...payload[0] } };
    case SET_CURRENT_CITY_FORECAST:
      return { ...state, currentCityForecast: [...payload.DailyForecasts] };
    default:
      return state;
  }
}

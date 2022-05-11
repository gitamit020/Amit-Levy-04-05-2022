import {
    SET_CURRENT_CITY,
    SET_CURRENT_CITY_FORECAST,
    SET_CURRENT_CITY_WEATHER
} from '../actionTypes';

const initialState = {
  currentCity: {},
  currentCityForecast: [],
  currentCityWeather: {}
};

export function currentCityReducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_CITY:
      return { ...state, currentCity: { ...payload[0] } };
    case SET_CURRENT_CITY_FORECAST:
      return { ...state, currentCityForecast: [...payload.DailyForecasts] };
    case SET_CURRENT_CITY_WEATHER:
      return { ...state, currentCityWeather: { ...payload[0] } };
    default:
      return state;
  }
}

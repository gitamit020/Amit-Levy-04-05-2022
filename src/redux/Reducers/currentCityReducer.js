import { MOCK_WEATHER } from "../../MOCKS/currentWeather";
import { MOCK_CITY } from "../../MOCKS/city";
import { MOCK_FORECAST } from "../../MOCKS/forecast";
import {
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_FORECAST,
  SET_CURRENT_CITY_WEATHER,
} from "../actionTypes";

const initialState = {
  currentCity: MOCK_CITY,
  currentCityForecast: MOCK_FORECAST,
  currentCityWeather: MOCK_WEATHER,
};

export function currentCityReducer(state = initialState, { type, payload }) {
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

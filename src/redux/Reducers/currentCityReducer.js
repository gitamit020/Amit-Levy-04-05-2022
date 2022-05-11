<<<<<<< HEAD
import {
    SET_CURRENT_CITY,
    SET_CURRENT_CITY_FORECAST,
    SET_CURRENT_CITY_WEATHER
} from '../actionTypes';
=======
import { MOCK_WEATHER } from "../../MOCKS/currentWeather";
import { MOCK_CITY } from "../../MOCKS/city";
import { MOCK_FORECAST } from "../../MOCKS/forecast";
import {
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_FORECAST,
  SET_CURRENT_CITY_WEATHER,
} from "../actionTypes";
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d

const initialState = {
  currentCity: {},
  currentCityForecast: [],
<<<<<<< HEAD
  currentCityWeather: {}
};

export function currentCityReducer (state = initialState, { type, payload }) {
=======
  currentCityWeather: {},
};

export function currentCityReducer(state = initialState, { type, payload }) {
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
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

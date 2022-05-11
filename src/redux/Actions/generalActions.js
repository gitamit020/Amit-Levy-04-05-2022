<<<<<<< HEAD
import axios from 'axios';
import { API_KEY, INITIAL_CITY_KEY, INITIAL_CITY_NAME } from '../../consts';
import { CLEAR_ERROR_MSG, SET_CURRENT_GEO, SET_ERROR_MSG } from '../actionTypes';
import {
    setCurrentCity,
    setCurrentCityForecast,
    setCurrentCityWeather
} from './currentCityActions';

export const setErrorMsg = msg => ({
  type: SET_ERROR_MSG,
  payload: msg
});

export const clearErrorMsg = () => ({
  type: CLEAR_ERROR_MSG
});

export const setGEOdata = (longitude, latitude) => dispatch => {
  axios
        .get(
            `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
        )
        .then(res => dispatch({ type: SET_CURRENT_GEO, payload: res.data.LocalizedName }))
        .catch(e => {
          dispatch(setCurrentCity(INITIAL_CITY_NAME));
          dispatch(setCurrentCityForecast(INITIAL_CITY_KEY));
          dispatch(setCurrentCityWeather(INITIAL_CITY_KEY));
        });
=======
import axios from "axios";
import { API_KEY, INITIAL_CITY_KEY, INITIAL_CITY_NAME } from "../../consts";
import { CLEAR_ERROR_MSG, SET_CURRENT_GEO, SET_ERROR_MSG } from "../actionTypes";
import {
  setCurrentCity,
  setCurrentCityForecast,
  setCurrentCityWeather,
} from "./currentCityActions";

export const setErrorMsg = (msg) => ({
  type: SET_ERROR_MSG,
  payload: msg,
});

export const clearErrorMsg = () => ({
  type: CLEAR_ERROR_MSG,
});

export const setGEOdata = (longitude, latitude) => (dispatch, getState) => {
  axios
    .get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
    )
    .then((res) => dispatch({ type: SET_CURRENT_GEO, payload: res.data.LocalizedName }))
    .catch((e) => console.log(e));
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
};

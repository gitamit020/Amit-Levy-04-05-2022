import axios from "axios";
import { API_KEY, SET_CURRENT_CITY, SET_CURRENT_CITY_FORECAST, SET_CURRENT_CITY_WEATHER } from "../actionTypes";

export const setCurrentCity = (cityName) => (dispatch, getState) => {
    axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`)
        .then((res) => dispatch({ type: SET_CURRENT_CITY, payload: res.data }))
        .catch((e) => console.log(e));
};

export const setCurrentCityForecast = (cityKey) => (dispatch, getState) => {
    axios
        .get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`)
        .then((res) => dispatch({ type: SET_CURRENT_CITY_FORECAST, payload: res.data }))
        .catch((e) => console.log(e));
};

export const setCurrentCityWeather = (cityKey) => (dispatch, getState) => {
    axios
        .get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
        .then((res) => dispatch({ type: SET_CURRENT_CITY_WEATHER, payload: res.data }))
        .catch((e) => console.log(e));
};

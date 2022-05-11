import axios from 'axios';
import { API_KEY, EXCEPTIONS } from '../../consts';
import {
    SET_CURRENT_CITY,
    SET_CURRENT_CITY_FORECAST,
    SET_CURRENT_CITY_WEATHER
} from '../actionTypes';
import { setErrorMsg } from './generalActions';

export const setCurrentCity = cityName => dispatch => {
  axios
        .get(
            `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`
        )
        .then(res => dispatch({ type: SET_CURRENT_CITY, payload: res.data }))
        .catch(() =>
            dispatch(setErrorMsg(EXCEPTIONS.COULD_NOT_FETCH_CITY.replace('<CITY_NAME>', cityName)))
        );
};

export const setCurrentCityForecast = cityKey => (dispatch, getState) => {
  const { currentCityReducer: { currentCity } } = getState();
  axios
        .get(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`
        )
        .then(res => dispatch({ type: SET_CURRENT_CITY_FORECAST, payload: res.data }))
        .catch(e =>
            dispatch(
                setErrorMsg(
                    EXCEPTIONS.COULD_NOT_FETCH_FORECAST.replace(
                        '<CITY_NAME>',
                        currentCity.LocalizedName
                    )
                )
            )
        );
};

export const setCurrentCityWeather = cityKey => (dispatch, getState) => {
  const { currentCityReducer: { currentCity } } = getState();

  axios
        .get(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
        .then(res => dispatch({ type: SET_CURRENT_CITY_WEATHER, payload: res.data }))
        .catch(e =>
            dispatch(
                setErrorMsg(
                    EXCEPTIONS.COULD_NOT_FETCH_WEATHER.replace(
                        '<CITY_NAME>',
                        currentCity.LocalizedName
                    )
                )
            )
        );
};

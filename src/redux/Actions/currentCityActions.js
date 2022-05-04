import axios from "axios";
import { API_KEY, SET_CURRENT_CITY } from "../actionTypes";

export const setCurrentCity = (cityName) => (dispatch, getState) => {
    axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`)
        .then((res) => {
            dispatch({ type: SET_CURRENT_CITY, payload: res.data });
            console.log(res);
        })
        .catch((e) => console.log(e));
};

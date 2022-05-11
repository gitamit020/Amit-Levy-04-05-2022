import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CurrentCity from "./CurrentCity";
import { setCurrentCity, setCurrentCityForecast, setCurrentCityWeather } from "../redux/Actions/currentCityActions";
import { useDebounce } from "use-debounce";
import { API_KEY, EXCEPTIONS } from "../consts";
import { setErrorMsg } from "../redux/Actions/generalActions";

export default function SearchPage() {
    const [inputValue, setInputValue] = useState("");
    const [debouncedInput] = useDebounce(inputValue, 500);
    const [autoCompleteList, setAutoCompleteList] = useState([]);
    const { currentCity } = useSelector((state) => state.currentCityReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputValue.length > 0) {
            axios
                .get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${inputValue?.split(", ")[0]}`)
                .then((res) => setAutoCompleteList(res.data))
                .catch(() => dispatch(setErrorMsg(EXCEPTIONS.COULD_NOT_FETCH_AUTOCOMP)));
        } else {
            setAutoCompleteList([]);
        }
    }, [dispatch, debouncedInput]);

    const handleSearch = (searchText) => {
        dispatch(setCurrentCity(searchText.split(", ")[0]));
    };

    useEffect(() => {
        if ("Key" in currentCity) {
            dispatch(setCurrentCityForecast(currentCity.Key));
            dispatch(setCurrentCityWeather(currentCity.Key));
        }
    }, [dispatch, currentCity]);
    return (
        <div className="searchPage">
            <div className="searchBarDiv">
                <Autocomplete
                    className="autoComplete"
                    value={inputValue}
                    id="free-solo-2-demo"
                    options={autoCompleteList.map(({ LocalizedName, Country }) => `${LocalizedName}, ${Country.LocalizedName}`)}
                    onChange={(e, value) => {
                        handleSearch(value);
                    }}
                    onInputChange={(e, value) => setInputValue(value)}
                    renderInput={(params) => <TextField {...params} label="So what's the weather in..." variant="outlined" fullWidth />}
                />
            </div>
            <CurrentCity />
        </div>
    );
}

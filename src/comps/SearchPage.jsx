import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CurrentCity from "./CurrentCity";
<<<<<<< HEAD
import { setCurrentCity, setCurrentCityForecast, setCurrentCityWeather } from "../redux/Actions/currentCityActions";
=======
import {
  setCurrentCity,
  setCurrentCityForecast,
  setCurrentCityWeather,
} from "../redux/Actions/currentCityActions";
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
import { useDebounce } from "use-debounce";
import { API_KEY, EXCEPTIONS } from "../consts";
import { setErrorMsg } from "../redux/Actions/generalActions";

export default function SearchPage() {
<<<<<<< HEAD
    const [inputValue, setInputValue] = useState("");
    const [debouncedInput] = useDebounce(inputValue, 500);
    const [autoCompleteList, setAutoCompleteList] = useState([]);
    const { currentCity } = useSelector((state) => state.currentCityReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputValue.length > 0) {
            axios
                .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${inputValue?.split(", ")[0]}`)
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
=======
  const [inputValue, setInputValue] = useState("");
  const [debouncedInput] = useDebounce(inputValue, 500);
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  const { currentCity } = useSelector((state) => state.currentCityReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue.length > 0) {
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${
            inputValue?.split(", ")[0]
          }`
        )
        .then((res) => setAutoCompleteList(res.data))
        .catch(() => dispatch(setErrorMsg(EXCEPTIONS.COULD_NOT_FETCH_AUTOCOMP)));
    } else {
      setAutoCompleteList([]);
    }
  }, [dispatch, debouncedInput]);

  const handleSearch = (searchText) => {
    dispatch(setCurrentCity(searchText.split(", ")[0]));
    dispatch(setCurrentCityForecast(currentCity.Key));
    dispatch(setCurrentCityWeather(currentCity.key));
  };

  return (
    <div className="searchPage">
      <div className="searchBarDiv">
        <Autocomplete
          className="autoComplete"
          value={inputValue}
          id="free-solo-2-demo"
          options={autoCompleteList.map(
            ({ LocalizedName, Country }) => `${LocalizedName}, ${Country.LocalizedName}`
          )}
          onChange={(e, value) => {
            handleSearch(value);
          }}
          onInputChange={(e, value) => setInputValue(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="So what's the weather in..."
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
      <CurrentCity />
    </div>
  );
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
}

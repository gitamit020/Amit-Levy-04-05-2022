import React, { useEffect, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { API_KEY } from "../redux/actionTypes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CurrentCity from "./CurrentCity";
import {
  setCurrentCity,
  setCurrentCityForecast,
  setCurrentCityWeather,
} from "../redux/Actions/currentCityActions";
import { useDebounce } from "use-debounce";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedInput] = useDebounce(inputValue, 500);
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  const { currentCity } = useSelector((state) => state.currentCityReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue.length > 0) {
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${debouncedInput}`
        )
        .then((res) => setAutoCompleteList(res.data));
    }
    console.log("changed");
  }, [debouncedInput]);

  const handleSearch = () => {
    dispatch(setCurrentCity(inputValue));
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
          onChange={(e) => {}}
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
        {/* disabled={inputValue === "" || autoCompleteList.length === 0} */}
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </div>
      <CurrentCity />
    </div>
  );
}

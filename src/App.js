import { Alert, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./comps/Header";
import Mainpage from "./comps/Mainpage";
import { INITIAL_CITY_KEY, INITIAL_CITY_NAME, SNACKBAR_DURATION } from "./consts";
import {
  setCurrentCity,
  setCurrentCityForecast,
  setCurrentCityWeather,
} from "./redux/Actions/currentCityActions";
import { clearErrorMsg, setGEOdata } from "./redux/Actions/generalActions";
import { getCurrentGEO } from "./utillities";

export default function App() {
  const { errorMsg, currentLocation } = useSelector((state) => state.generalReducer);
  const { currentCity } = useSelector((state) => state.currentCityReducer);
  const [isErrOpen, setIsErrOpen] = useState(false);
  const dispatch = useDispatch();

  const closeErrorMsg = () => {
    setTimeout(() => {
      dispatch(clearErrorMsg());
    }, SNACKBAR_DURATION);
    setIsErrOpen(false);
  };

  useEffect(() => {
    if (errorMsg.length) {
      setIsErrOpen(true);
    }
  }, [errorMsg]);

  useEffect(() => {
    (async () => {
      await getCurrentGEO()
        .then(({ longitude, latitude }) => {
          dispatch(setGEOdata(longitude, latitude));
        })
        .catch((e) => {
          dispatch(setCurrentCity(INITIAL_CITY_NAME));
          dispatch(setCurrentCityForecast(INITIAL_CITY_KEY));
          dispatch(setCurrentCityWeather(INITIAL_CITY_KEY));
        });
    })();
  }, []);

  useEffect(() => {
    if (currentLocation.length) dispatch(setCurrentCity(currentLocation));
  }, [currentLocation]);

  useEffect(() => {
    if ("Key" in currentCity) {
      dispatch(setCurrentCityForecast(currentCity.Key));
      dispatch(setCurrentCityWeather(currentCity.Key));
    }
  }, [currentCity]);

  return (
    <div className="main">
      <Header />
      <Mainpage />
      <Snackbar
        open={isErrOpen}
        autoHideDuration={SNACKBAR_DURATION}
        onClose={closeErrorMsg}
        action={<CloseIcon />}
      >
        <Alert sx={{ width: "300px" }} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}

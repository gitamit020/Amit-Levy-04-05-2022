import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./comps/Header";
import Mainpage from "./comps/Mainpage";
import {
  setCurrentCity,
  setCurrentCityForecast,
  setCurrentCityWeather,
} from "./redux/Actions/currentCityActions";
import { INITIAL_CITY_KEY, INITIAL_CITY_NAME } from "./redux/actionTypes";

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCurrentCityForecast(INITIAL_CITY_KEY));
  //   dispatch(setCurrentCity(INITIAL_CITY_NAME));
  //   dispatch(setCurrentCityWeather(INITIAL_CITY_KEY));
  // }, [dispatch]);

  return (
    <div className="main">
      <Header />
      <Mainpage />
    </div>
  );
}

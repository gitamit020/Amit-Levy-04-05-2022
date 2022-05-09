import { Button, Card, CardContent, Checkbox, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCity, setCurrentCityForecast } from "../redux/Actions/currentCityActions";
import { useNavigate } from "react-router-dom";
import { rmvFavorite } from "../redux/Actions/favoritesActions";
import { Favorite } from "@mui/icons-material";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rmvFav = (key) => {
    dispatch(rmvFavorite(key));
  };

  const fullForecastView = (key, cityName) => {
    dispatch(setCurrentCity(cityName));
    dispatch(setCurrentCityForecast(key));
    navigate("/searchPage");
  };

  return (
    <div className="favoritesDiv">
      {favorites.map(({ id, cityName }, i) => (
        <Card key={i} sx={{ height: "300px", width: "200px" }}>
          <CardContent>
            <Typography>{cityName}</Typography>
            <Button
              onClick={() => fullForecastView(id, cityName)}
              variant="contained"
              endIcon={<ThermostatIcon />}
            >
              5-Day forecast
            </Button>
            <Checkbox onClick={() => rmvFav(id)} checked checkedIcon={<Favorite />} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

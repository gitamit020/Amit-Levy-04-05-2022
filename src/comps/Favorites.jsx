import { Box, Button, Card, Checkbox, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCity, setCurrentCityForecast } from "../redux/Actions/currentCityActions";
import { useNavigate } from "react-router-dom";
import { clearFavorites, rmvFavorite, setFavorites } from "../redux/Actions/favoritesActions";
import { Favorite } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import TempDisplay from "./TempDisplay";
import axios from "axios";
import { API_KEY, EXCEPTIONS } from "../consts";
import moment from "moment";

export default function Favorites() {
    const { favorites } = useSelector((state) => state.favoritesReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rmvFav = (key) => {
        dispatch(rmvFavorite(key));
    };

    const getUpdatedFavsWeather = () => {
        const newFavorites = favorites.map((fav) =>
            axios
                .get(
                    `https://dataservice.accuweather.com/currentconditions/v1/${fav.id}?apikey=${API_KEY}`
                )
                .then((res) => ({ ...fav, currentWeather: res.data[0].Temperature.Metric.Value }))
        );
        return Promise.all(newFavorites);
    };

    useEffect(() => {
        getUpdatedFavsWeather()
            .then((updatedFavs) => dispatch(setFavorites(updatedFavs)))
            .catch(() => EXCEPTIONS.COUND_NOT_UPDATE_FAVS_WEATHER);
    }, [dispatch]);

    const fullForecastView = (key, cityName) => {
        dispatch(setCurrentCity(cityName));
        dispatch(setCurrentCityForecast(key));
        navigate("/searchPage");
    };

    return (
        <div className="favoritesDiv">
            <Button
                className="clearFavsDiv"
                onClick={() => dispatch(clearFavorites())}
                variant="contained"
            >
                <DeleteIcon />
            </Button>
            {favorites.map(({ id, cityName, text, addedOn, currentWeather }, i) => (
                <Card className="eachFavCard" variant="outlined" key={i}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }} variant="h5">
                            {cityName}
                        </Typography>
                        <Typography sx={{ fontSize: "25px" }}>{text}</Typography>
                    </Box>
                    <Typography>
                        <TempDisplay tempInCelsius={currentWeather} />
                    </Typography>
                    <Typography variant="h7">
                        Added on:
                        <br />
                        {moment(addedOn).format("MMMM DD, h:mm a")}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            onClick={() => fullForecastView(id, cityName)}
                            variant="contained"
                            endIcon={<ThermostatIcon />}
                            sx={{ height: "50px", width: "110px", fontSize: "13px" }}
                        >
                            Full forecast
                        </Button>
                        <Checkbox onClick={() => rmvFav(id)} checked checkedIcon={<Favorite />} />
                    </Box>
                </Card>
            ))}
        </div>
    );
}

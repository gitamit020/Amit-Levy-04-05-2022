import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, rmvFavorite } from "../redux/Actions/favoritesActions";
import Forecast from "./Forecast";

export default function CurrentCity() {
    const { favorites } = useSelector((state) => state.favoritesReducer);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const {
        currentCity: { LocalizedName, Key },
        currentCityWeather: { WeatherText, Temperature }
    } = useSelector((state) => state.currentCityReducer);

    useEffect(() => {
        favorites.map((fav) =>
            Object.values(fav).includes(Key) ? setChecked(true) : setChecked(false)
        );
    }, [LocalizedName]);

    const addOrRmvFav = () => {
        setChecked((checked) => !checked);
        if (!checked) {
            dispatch(addFavorite(Key, LocalizedName, Temperature.Metric.Value, WeatherText));
        } else {
            dispatch(rmvFavorite(Key));
        }
    };

    return (
        <div className="currentCityDiv">
            <Stack direction="row" spacing={3} alignItems="center">
                <Typography variant="h3">{LocalizedName}</Typography>
                <Checkbox
                sx={{transform: "scale(2)"}}
                    onClick={addOrRmvFav}
                    checked={checked}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                />
            </Stack>
            <Forecast />
        </div>
    );
}

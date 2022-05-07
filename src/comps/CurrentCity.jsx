import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, rmvFavorite } from "../redux/Actions/favoritesActions";
import Forecast from "./Forecast";

export default function CurrentCity() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const {
    currentCity: { LocalizedName, Key },
    currentCityForecast: {
      Temperature: { Minimum, Maximum },
      Day: { IconPhrase },
    },
  } = useSelector((state) => state.currentCityReducer);

  const addOrRmvFav = () => {
    if (checked) {
      const avgDailyTemp = (Minimum + Maximum) / 2;
      dispatch(addFavorite(Key, LocalizedName, avgDailyTemp, IconPhrase));
    } else {
      dispatch(rmvFavorite(Key));
    }
    setChecked((checked) => !checked);
  };

  return (
    <div className="currentCityDiv">
      <h1>{LocalizedName}</h1>
      <Forecast />
      <Checkbox
        onClick={addOrRmvFav}
        checked={checked}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </div>
  );
}

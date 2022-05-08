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
  } = useSelector((state) => state.currentCityReducer);

  const addOrRmvFav = () => {
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

import { Switch } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEMP_FAHRENHEIT } from "../consts";
import { toggleTempUnit } from "../redux/Actions/preferencesActions";

export default function ToggleTemp() {
  const { tempUnit } = useSelector((state) => state.preferencesReducer);
  const dispatch = useDispatch();

  const toggleTemp = () => {
    dispatch(toggleTempUnit());
  };

  return <Switch checked={tempUnit === TEMP_FAHRENHEIT} onChange={toggleTemp} />;
}

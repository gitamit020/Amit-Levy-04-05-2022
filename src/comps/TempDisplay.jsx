import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { TEMP_FAHRENHEIT } from "../consts";

export default function TempDisplay({ tempInCelsius }) {
  const { tempUnit } = useSelector((state) => state.preferencesReducer);

  const renderTemp = () =>
    tempUnit === TEMP_FAHRENHEIT
      ? `${(tempInCelsius * 1.8 + 32).toFixed(2)}°F`
      : `${tempInCelsius}°C`;

  return <Typography>{renderTemp()}</Typography>;
}

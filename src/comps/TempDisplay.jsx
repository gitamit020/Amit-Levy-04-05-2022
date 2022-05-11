import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { TEMP_FAHRENHEIT } from "../consts";

export default function TempDisplay({ tempInCelsius }) {
  const { tempUnit } = useSelector((state) => state.preferencesReducer);

  const renderTemp = () =>
    tempUnit === TEMP_FAHRENHEIT
<<<<<<< HEAD
      ? `${(tempInCelsius * 1.8 + 32).toFixed(1)}°F`
      : `${tempInCelsius}°C`;

  return <Typography sx={{fontWeight: "bold", fontSize: "25px"}}>{renderTemp()}</Typography>;
=======
      ? `${(tempInCelsius * 1.8 + 32).toFixed(2)}°F`
      : `${tempInCelsius}°C`;

  return <Typography>{renderTemp()}</Typography>;
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
}

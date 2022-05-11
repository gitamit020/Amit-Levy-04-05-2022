import React from "react";
import { useSelector } from "react-redux";
import TempDisplay from "./TempDisplay";
<<<<<<< HEAD
import moment from "moment";
import { Box, Card, Typography } from "@mui/material";
import { dayNightBoxStyle, dayNightStyle, minMaxStyle } from "../MUIstyles";

export default function Forcast() {
    const { currentCityForecast } = useSelector((state) => state.currentCityReducer);
    return (
        <div className="forecastDiv">
            {currentCityForecast.map(({ Date, Temperature: { Minimum, Maximum }, Day, Night }, i) => (
                <Card variant="outlined" className="eachForecastCard" key={i}>
                    <Typography component={"span"} variant="h5" sx={{ mb: "10px", fontWeight: "bold", textAlign: "center" }}>
                        {moment(Date).format("MMMM DD")}
                    </Typography>
                    <Typography component={"span"} sx={minMaxStyle}>
                        Max: <TempDisplay tempInCelsius={Maximum.Value} />
                    </Typography>
                    <Typography component={"span"} sx={minMaxStyle}>
                        Min: <TempDisplay tempInCelsius={Minimum.Value} />
                    </Typography>
                    <Box sx={dayNightBoxStyle}>
                        <Typography component={"span"} sx={dayNightStyle}>
                            Day
                            <br />
                            ↓
                            <br />
                            {Day.IconPhrase}
                        </Typography>
                        <Typography component={"span"} sx={dayNightStyle}>
                            Night
                            <br />
                            ↓
                            <br />
                            {Night.IconPhrase}
                        </Typography>
                    </Box>
                </Card>
            ))}
=======

export default function Forcast() {
  const { currentCityForecast } = useSelector((state) => state.currentCityReducer);

  return (
    <div className="forecastDiv">
      {currentCityForecast.map(({ Date, Temperature: { Minimum, Maximum }, Day, Night }, i) => (
        <div key={i} className="eachDayDiv">
          <p>{Date}</p>
          <p>
            max: <TempDisplay tempInCelsius={Maximum.Value} />
          </p>
          <p>
            min: <TempDisplay tempInCelsius={Minimum.Value} />
          </p>
          <p>day: {Day.IconPhrase}</p>
          <p>night: {Night.IconPhrase}</p>
>>>>>>> fc18abc66fd81d935ab21bfd3eae01db1ae2661d
        </div>
    );
}

import React from "react";
import { useSelector } from "react-redux";
import TempDisplay from "./TempDisplay";
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
        </div>
    );
}

import React from "react";
import { useSelector } from "react-redux";
import TempDisplay from "./TempDisplay";

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
        </div>
      ))}
    </div>
  );
}

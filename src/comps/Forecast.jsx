import React from "react";
import { useSelector } from "react-redux";

export default function Forcast() {
  const { currentCityForecast } = useSelector((state) => state.currentCityReducer);

  console.log(currentCityForecast);

  return (
    <div className="forecastDiv">
      {currentCityForecast.map(({ Date, Temperature: { Minimum, Maximum }, Day, Night }, i) => (
        <div key={i} className="eachDayDiv">
          <p>{Date}</p>
          <p>
            max: {Maximum.Value} {Maximum.Unit}
          </p>
          <p>
            min: {Minimum.Value} {Minimum.Unit}
          </p>
          <p>day: {Day.IconPhrase}</p>
          <p>night: {Night.IconPhrase}</p>
        </div>
      ))}
    </div>
  );
}

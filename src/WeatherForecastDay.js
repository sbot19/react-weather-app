import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function highTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }

  function lowTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">
        {day()}
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="forecast-day-temps">
          <div className="forecast-high-temp">{highTemp()}</div>
          <div className="forecast-low-temp">{lowTemp()}</div>
        </div>
      </div>
    </div>
  );
}

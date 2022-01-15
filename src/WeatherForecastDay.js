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

  function month() {
    let date = new Date(props.data.dt * 1000);
    let month = date.getMonth();

    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return months[month];
  }

  function date() {
    let day = new Date(props.data.dt * 1000);
    let dayNumber = day.getDate();
    return dayNumber;
  }

  return (
    <div>
      <div className="forecast-day">
        <div className="col">
          <div className="row">
            <div className="dayOfTheWeek">{day()}</div>
            <div className="month-date">
              {month()} {date()}
            </div>
          </div>
          <div className="row">
            <div className="weather-icon">
              <WeatherIcon code={props.data.weather[0].icon} size={36} />
            </div>
          </div>
          <div className="row">
            <div className="forecast-day-temps">
              <div className="forecast-high-temp">{highTemp()}</div>
              <div className="forecast-low-temp">{lowTemp()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

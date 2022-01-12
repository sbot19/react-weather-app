import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="WeatherTemperature">
          <div className="row">
            <div className="col-6 pe-1">
              <span className="temperature">{Math.round(props.celsius)}</span>{" "}
              <span className="unit">
                <a>˚C</a> <a onClick={showFahrenheit}>˚F</a>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels like: {props.feelsLike}˚C</li>
                <li>
                  High: {props.highTemp}˚C | Low: {props.lowTemp}˚C
                </li>
                <li>Humidity: {props.humidity}%</li>
                <li>Wind: {props.wind} km/h</li>
              </ul>
            </div>
          </div>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <div className="WeatherTemperature">
          <div className="row">
            <div className="col-6 pe-1">
              <span className="temperature">
                {Math.round((props.celsius * 9) / 5 + 32)}
              </span>{" "}
              <span className="unit">
                {" "}
                <a onClick={showCelsius}>˚C</a> <a>˚F</a>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Feels like: {Math.round((props.feelsLike * 9) / 5 + 32)}˚F
                </li>
                <li>
                  High: {Math.round(props.highTemp * (9 / 5) + 32)}˚F | Low:{" "}
                  {Math.round(props.lowTemp * (9 / 5) + 32)}˚F
                </li>
                <li>Humidity: {props.humidity}%</li>
                <li>Wind: {Math.round(props.wind*0.62137)} mph</li>
              </ul>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

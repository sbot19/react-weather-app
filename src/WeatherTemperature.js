import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="WeatherTemperature">
        <div className="row">
          <div className="col-md-auto">
            <span className="temperature">{Math.round(props.celsius)}</span>{" "}
            <span className="unit">˚C</span>
          </div>
          <div className="col-sm weather-info">
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
}

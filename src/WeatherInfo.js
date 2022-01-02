import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import Background from "./Background";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <Background code={props.data.icon} />
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
          
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {props.data.feelsLike}˚C</li>
            <li>
              High: {props.data.highTemp}˚C | Low: {props.data.lowTemp}˚C
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

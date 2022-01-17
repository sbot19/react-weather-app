import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>

        <li className="mb-2">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-4">
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
        <div className="col-sm-8">
          <WeatherTemperature
            celsius={props.data.temperature}
            feelsLike={props.data.feelsLike}
            highTemp={props.data.highTemp}
            lowTemp={props.data.lowTemp}
            humidity={props.data.humidity}
            wind={props.data.wind}
          />
        </div>
      </div>
    </div>
  );
}

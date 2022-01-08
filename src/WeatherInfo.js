import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
/* import Background from "./Background"; */

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {/* <Background code={props.data.icon} /> */}
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="mb-2">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
        <div className="col-8">
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

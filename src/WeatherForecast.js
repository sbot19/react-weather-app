import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">
            THU
            <WeatherIcon code="01d" size={36} />
            <div className="forecast-day-temps">
              <span className="forecast-high-temp">19</span>
              <span className="forecast-low-temp">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

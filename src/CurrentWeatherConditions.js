import React from "react";

  /* import "./App.css"; */


export default function CurrentWeatherConditions() {
  let weatherData = {
    city: "Washington",
    date: "December 6 2021",
    time: "16:40",
    description: "Windy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    currentTemp: 51,
    highTemp: 60,
    lowTemp: 40,
    feelsLikeTemp: 45,
    humidity: 15,
    windSpeed: 8,
  };

  return (
    <div className="CurrentWeatherConditions">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: {weatherData.date} {weatherData.time}{" "}
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="d-flex current-weather-icon">
            <img
              src={weatherData.imgURL}
              alt="{weatherData.description}"
              className="float-left filter-white"
              id="icon"
            />
            <div className="float-left">
              <strong>{weatherData.currentTemp}</strong>
              <small className="current-temp-unit">˚F </small>
            </div>
          </div>
        </div>
        <div className="col-auto conditions">
          <ul>
            <li>
              High: {weatherData.highTemp}˚F | Low: {weatherData.lowTemp}˚F
            </li>
            <li>Feels like: {weatherData.feelsLikeTemp}˚F</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.windSpeed}MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

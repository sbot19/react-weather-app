import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import Background from "./Background";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      //The '*1000' converts the milliseconds (from OpenWeatherMap) to actual Date and Time
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelsLike: Math.round(response.data.main.feels_like),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coord,
      //The 'coordinates' were added to receive weather conditions on a daily basis
    });
  }

  function search() {
    //city
    const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    //search for a city
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    //store the value of the input inside a state
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Background code={weatherData.icon} />
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="row Search-info mb-4">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city ..."
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control city-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-4">
                <button type="submit" value="search" className="search-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="Grid"
        color="#00000"
        height={100}
        width={100}
        timeout={10000} //5 secs
        className="text-center mt-5 mb-5"
      />
    );
  }
}

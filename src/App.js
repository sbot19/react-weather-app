import React from "react";
import CitySearch from "./CitySearch";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import DailyForecast from "./DailyForecast";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <CitySearch />
        <CurrentWeatherConditions />
        <DailyForecast />
        <footer className="openSource text-center">
          This app was coded by Scarleth Bernabe and is {""}
          <a
            href="https://github.com/sbot19/Vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
            className="open-source-link"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

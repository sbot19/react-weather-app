import React from "react";

import Weather from "./Weather";

import DailyForecast from "./DailyForecast";
import "./Weather.css";
import "./AppA.css";

/* import "./App.css"; */

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        {/*  <CitySearch />   */}
        {/* <CurrentWeatherConditions />  */}
        {/* <DailyForecast /> */}
        <Weather defaultCity="New York" />
        <footer className="open-source text-center">
          This app was coded by Scarleth Bernabe and is {""}
          <a
            href="https://github.com/sbot19/react-weather-app"
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

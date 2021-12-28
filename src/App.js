import React from "react";
import CitySearch from "./CitySearch";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import DailyForecast from "./DailyForecast";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <CitySearch />
        <CurrentWeatherConditions />
        <DailyForecast />
      </div>
    </div>
  );
}

export default App;

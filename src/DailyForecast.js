import React from "react";
import "./App.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="weather-forecast forecast-weekday"></div>;
      <small className="openSource">
        <a
          href="https://github.com/sbot19/Vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
          className="open-source-link"
        >
          Open-source code
        </a>
        by Scarleth Bernabe
      </small>
    </div>
  );
}

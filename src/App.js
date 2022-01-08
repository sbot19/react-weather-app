import React from "react";
import Background from "./Background";
import Weather from "./Weather";

import "./Weather.css";
import "./AppA.css";

/* import "./App.css"; */

export default function App(props) {
  return (
    <div className="container">
      <Background code={props.data.icon} />
      <div className="weather-app">
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

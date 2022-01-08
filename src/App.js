import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./AppA.css";
import Background from "./Background";

/* import "./App.css"; */

export default function App(props) {
  return (
    <body>
      <Background data={props.icon}/>
      <div className="container">
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
    </body>
    
  );
}

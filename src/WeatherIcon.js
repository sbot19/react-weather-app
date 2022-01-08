import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  //Code Mapping Variable
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "CLEAR_DAY",
    "02n": "CLEAR_NIGHT",
    "03d": "PARTLY_CLOUDY",
    "03n": "PARTLY_CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <span className="WeatherIcon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="white"
        size={props.size}
        animate={true}
      />
    </span>
  );
}

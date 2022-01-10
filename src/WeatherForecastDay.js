import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return days[day];
    }

    let highTempCelsius = Math.round(props.data.temp.max);
    let highTempFahrenheit = Math.round((props.data.temp.max * 9) / 5 + 32);

    let lowTempCelsius = Math.round(props.data.temp.min);
    let lowTempFahrenheit = Math.round((props.data.temp.min * 9) / 5 + 32);

    if (props.unit === "metric") {
      return (
        <div>
          <div className="forecast-day">
            {day()}
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="forecast-day-temps">
              <div className="forecast-high-temp">{highTempCelsius}˚C</div>
              <div className="forecast-low-temp">{lowTempCelsius}˚C</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="forecast-day">
            {day()}
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="forecast-day-temps">
              <div className="forecast-high-temp">{highTempFahrenheit}˚F</div>
              <div className="forecast-low-temp">{lowTempFahrenheit}˚F</div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <div>{forecastDay()}</div>;
}

/* 
    if (props.unit === "metric") {
      return `${lowTempCelsius} ˚C`;
    } else {
      return `${lowTempFahrenheit} ˚F`;
    }
  }

  
  function highTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }

  function lowTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  } 


  return (
    <div>
      <div className="forecast-day">
        {day()}
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="forecast-day-temps">
          <div className="forecast-high-temp">{maxTemp()}</div>
          <div className="forecast-low-temp">{minTemp()}</div>
        </div>
      </div>
    </div>
  );
  */

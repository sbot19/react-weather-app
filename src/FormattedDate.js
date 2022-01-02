import React from "react";

export default function FormattedDate(props) {
    //Date
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let dayNumber = props.date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ];
  let dayOfTheWeek = days[props.date.getDate()];

  //Time
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  let time = props.date.toLocaleString("en-US", options);

  return `Last Updated: ${dayOfTheWeek}, ${month} ${dayNumber}| ${time}`;
}

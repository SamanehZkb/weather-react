import React from "react";
import "./styles.css";
export default function Dailyforecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(props.data.time * 1000);
  return (
    <div class="card border border-dark day bg-transparent border-opacity-25 shadow-sm  bg-body rounded">
      <div class="card-body pt-0 pb-1">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width="70px"
        />
        <div class="predicted-degree">
          <span class="max">
            {Math.round(props.data.temperature.maximum)}
            <sup>°</sup>
          </span>
          {"  "}
          <span class="min">
            {Math.round(props.data.temperature.minimum)}
            <sup>°</sup>
          </span>
          <hr />
          {days[date.getDay()]}
        </div>
      </div>
    </div>
  );
}

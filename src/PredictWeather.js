import React, { useState } from "react";
import "./styles.css";
import LoadingIcons from "react-loading-icons";
import axios from "axios";

export default function PredictWeather(props) {
  let [forecast, setForecast] = useState("");
  let [ready, setReady] = useState(false);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);

    console.log(response.data.daily);
  }
  if (ready) {
    let date = new Date(forecast[1].time * 1000);
    return (
      <div class="row g-1">
        <div class="card border border-dark day bg-transparent border-opacity-25 shadow-sm  bg-body rounded">
          <div class="card-body pt-0 pb-1">
            <img
              src={forecast[1].condition.icon_url}
              alt={forecast[1].condition.description}
              width="70px"
            />
            <div class="predicted-degree">
              <span class="max">
                {Math.round(forecast[1].temperature.maximum)}
                <sup>°</sup>
              </span>
              {"  "}
              <span class="min">
                {Math.round(forecast[1].temperature.minimum)}
                <sup>°</sup>
              </span>
              <hr />
              {days[date.getDay()]}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.response.data.city}&key=o6e634db6050ata4f8132e3ce4047d3a`;
    axios.get(apiURL).then(showForecast);
    return (
      <div className="loading">
        <LoadingIcons.BallTriangle
          fill="transparent"
          stroke="#66D3F1"
          Height="2em"
        />
        <br />
        <br />
        <div> Loading… </div>
        <br />
      </div>
    );
  }
}

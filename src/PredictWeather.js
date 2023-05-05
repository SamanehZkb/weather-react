import React, { useEffect, useState } from "react";
import "./styles.css";
import LoadingIcons from "react-loading-icons";
import Dailyforecast from "./DailyForecast";
import axios from "axios";

export default function PredictWeather(props) {
  let [forecast, setForecast] = useState("");
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props]);

  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div class="row g-1">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <div class="col" key={index}>
                <Dailyforecast data={dailyforecast} />{" "}
              </div>
            );
          } else {
            return null;
          }
        })}
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

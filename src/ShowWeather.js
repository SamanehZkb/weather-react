import React from "react";
import CurrentDate from "./CurrentDate";
import PredictWeather from "./PredictWeather";
import ShowUnit from "./ShowUnit";

export default function ShowWeather(props) {
  let date = new Date(props.response.data.time * 1000);
  return (
    <div className="text">
      <div className="card border border-dark border-opacity-25 shadow-sm p-2 mb-1 bg-body rounded Title bg-transparent">
        <div className="card-body">
          {props.response.data.city.toUpperCase()}
        </div>
      </div>
      <div className="card border border-dark Today-weather bg-transparent border-opacity-25 shadow-sm bg-body rounded">
        <div className="card-body p-1">
          <div className="row m-1">
            <div className="col-sm-3">
              <span className="sky">
                <img
                  className="skyimage"
                  src={props.response.data.condition.icon_url}
                  alt={props.response.data.condition.description}
                  width="100px"
                />
                <div className="skymood">
                  {props.response.data.condition.description}
                </div>
              </span>
            </div>
            <div className="col">
              <div className="parent">
                <ShowUnit
                  data={Math.round(props.response.data.temperature.current)}
                />{" "}
                <div>
                  <div className="feels">
                    Feels like:{" "}
                    {Math.round(props.response.data.temperature.feels_like)} °C
                  </div>
                  <div className="humidity">
                    Humidity: {props.response.data.temperature.humidity}
                  </div>
                  <div className="wind">
                    Wind:{Math.round(props.response.data.wind.speed)} km/h
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 date">
              <CurrentDate date={date} />
            </div>
          </div>
          <PredictWeather response={props.response} />
        </div>
      </div>
    </div>
  );
}

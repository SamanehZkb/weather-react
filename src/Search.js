import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import LoadingIcons from "react-loading-icons";
import ShowTemp from "./ShowTemp";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("tehran");
  let [text, setText] = useState("");
  let [ready, setReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=o6e634db6050ata4f8132e3ce4047d3a&units=metric`;
    axios.get(apiURL).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    let skyimageURL = response.data.condition.icon_url;
    let date = new Date(response.data.time * 1000);
    console.log(response);
    setText(
      <div className="text">
        <div className="card border border-dark border-opacity-25 shadow-sm p-2 mb-1 bg-body rounded Title bg-transparent">
          <div className="card-body">{city.toUpperCase()}</div>
        </div>
        <div className="card border border-dark Today-weather bg-transparent border-opacity-25 shadow-sm bg-body rounded">
          <div className="card-body p-1">
            <div className="row m-1">
              <div className="col-sm-3">
                <span className="sky">
                  <img
                    className="skyimage"
                    src={skyimageURL}
                    alt={response.data.condition.description}
                    width="100px"
                  />
                  <div className="skymood">
                    {response.data.condition.description}
                  </div>
                </span>
              </div>
              <div className="col">
                <div className="parent">
                  <ShowTemp
                    data={Math.round(response.data.temperature.current)}
                  />{" "}
                  <div>
                    <div className="feels">
                      Feels like:{" "}
                      {Math.round(response.data.temperature.feels_like)} °C
                    </div>
                    <div className="humidity">
                      Humidity: {response.data.temperature.humidity}
                    </div>
                    <div className="wind">
                      Wind:{Math.round(response.data.wind.speed)} km/h
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 date">
                <CurrentDate date={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="col">
          <div className="card rounded-5 main">
            <div className="card-body">
              <form className="search-form" onSubmit={handleSubmit}>
                <div className="row g-1">
                  <div className="col-8">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      autofocus="on"
                      autocomplete="off"
                      className="form-control shadow-sm form-control"
                      onChange={changeCity}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="search"
                      className="form-control btn btn-primary shadow-sm form-control-sm"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="click"
                      value="Current"
                      className="form-control btn bg-success text-white shadow-sm form-control-sm"
                    />
                  </div>
                </div>
              </form>
              {text}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=o6e634db6050ata4f8132e3ce4047d3a&units=metric`;
    axios.get(apiURL).then(showWeather);
    return (
      <div className="loading">
        <LoadingIcons.BallTriangle
          fill="transparent"
          stroke="#66D3F1"
          Height="5em"
        />
        <br />
        <br />
        <div> Loading… </div>
        <br />
      </div>
    );
  }
}

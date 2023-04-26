import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a969311cfcbb4a83dfad2cf7478397f9&units=metric`;
    axios.get(apiURL).then(showWeather);

    function showWeather(response) {
      let icon = response.data.weather[0].icon;
      let skyimageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(skyimageURL);
      console.log(response);
      setText(
        <div className="text">
          <div className="card border border-dark border-opacity-25 shadow-sm p-2 mb-1 bg-body rounded Title bg-transparent">
            <div className="card-body">{city.toUpperCase()}</div>
          </div>
          <div className="card border border-dark Today-weather bg-transparent border-opacity-25 shadow-sm bg-body rounded">
            <div className="card-body p-1">
              <div className="row">
                <div className="col-sm-4">
                  <span className="sky">
                    <img
                      className="skyimage"
                      src={skyimageURL}
                      alt=""
                      width="100px"
                    />
                    <div className="skymood">
                      {response.data.weather[0].description}
                    </div>
                  </span>
                </div>
                <div className="col">
                  <div className="parent">
                    <div className="degree">
                      <span>{Math.round(response.data.main.temp)}</span>
                      <sup className="sup">
                        <a href="/" className="active">
                          °C
                        </a>
                        |<a href="/">°F</a>
                      </sup>
                    </div>
                    <div>
                      <div className="humidity">
                        Humidity: {response.data.main.humidity}
                      </div>
                      <div className="wind">
                        Wind:{Math.round(response.data.wind.speed)} km/h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
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
                    className="form-control shadow-sm form-control-sm"
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
}

import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import LoadingIcons from "react-loading-icons";

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
    console.log(response);
    setText(<ShowWeather response={response} />);
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
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      autofocus="on"
                      autocomplete="off"
                      className="form-control shadow-sm form-control"
                      onChange={changeCity}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="search"
                      className="form-control btn btn-primary shadow-sm form-control-sm"
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

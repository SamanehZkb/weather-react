import React, { useState } from "react";
import "./styles.css";
export default function ShowTemp(props) {
  let [unit, setUnit] = useState("celsius");

  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="degree">
        <span>{props.data}</span>
        <sup className="sup">
          <span>
            {" "}
            °C |{" "}
            <a href="/" onClick={showfahrenheit}>
              °F
            </a>
          </span>
        </sup>
      </div>
    );
  } else {
    return (
      <div className="degree">
        <span>{Math.round((props.data * 9) / 5 + 32)}</span>
        <sup className="sup">
          <span>
            <a href="/" onClick={showcelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </sup>
      </div>
    );
  }
}

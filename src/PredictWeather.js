import React from "react";
import "./styles.css";

export default function PredictWeather() {
  return (
    <div class="row g-1">
      <div class="card border border-dark day bg-transparent border-opacity-25 shadow-sm  bg-body rounded">
        <div class="card-body pt-0 pb-1">
          <img src="" alt="" width="70px" />
          <div class="predicted-degree">
            <span class="max">
              8<sup>°</sup>
            </span>
            <span class="min">
              5<sup>°</sup>
            </span>
            <hr />
            saturday
          </div>
        </div>
      </div>
    </div>
  );
}

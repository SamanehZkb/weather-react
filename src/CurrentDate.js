import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hours = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      <div>{days[props.date.getDay()]}</div>
      <div>
        {hours}: {minute}
      </div>

      <div>
        {props.date.getDate()} {months[props.date.getMonth()]}{" "}
        {props.date.getFullYear()}
      </div>
    </div>
  );
}

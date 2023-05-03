import React from "react";
import "../styles/NavBar.css";

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function NavBar() {
  return (
    <div className="navbar">
      <h1>
        {months[d.getMonth()]} {d.getFullYear()}
      </h1>
      <h4>
        {days[d.getDay()]}, {months[d.getMonth()].substring(0, 3)} {d.getDate()}
        , {d.getFullYear()}
      </h4>
    </div>
  );
}

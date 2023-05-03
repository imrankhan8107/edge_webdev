import React from "react";
import "../styles/RightPane.css";
import { BsFillCloudSunFill } from "react-icons/bs";

const d = new Date();

export default function RightPane() {
  return (
    <div className="right-pane">
      <div className="rp-up">
        <span>
          <p className="city-name">Mejasem Barat</p>
          <p className="country">Tejal, Indonesia</p>
        </span>
        <span>
          <p className="time">
            {d.getHours()}:{d.getMinutes()} {d.getHours() >= 12 ? "PM" : "AM"}
          </p>
        </span>
        <div className="rp-up-lower">
          <span>
            <BsFillCloudSunFill className="rp-icon" />
            <h2>20&#176; C </h2>
          </span>
          <span>
            <p>Dramatic Cloudy</p>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

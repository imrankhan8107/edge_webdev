import React, { useContext } from "react";
import { weatherContext } from "../App";
import { MidPaneCard, NavBar } from "../components";
import { WiCloudy, WiStrongWind, WiHumidity } from "react-icons/wi";
import { MdWaves } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "../styles/MiddlePane.css";

export default function MiddlePane() {
  const { weatherData } = useContext(weatherContext);
  console.log(weatherData);
  return (
    <div className="middle-pane">
      <NavBar />
      <hr />
      <MidPaneCard
        main_icon={<WiStrongWind className="icon" />}
        main_title={"Wind Speed"}
        main_val={weatherData.wind?.speed + " m/s"}
        sub_icon={<AiFillCaretDown />}
        sub_value={"2 km/h"}
      />
      <MidPaneCard
        main_icon={<WiCloudy className="icon" />}
        main_title={"Cloudiness"}
        main_val={weatherData.clouds?.all}
        sub_icon={<AiFillCaretUp />}
        sub_value={"10 %"}
      />
      <MidPaneCard
        main_icon={<MdWaves className="icon" />}
        main_title={"Pressure"}
        main_val={weatherData.main?.pressure + " hPa"}
        sub_icon={<AiFillCaretUp />}
        sub_value={"32 hpa"}
      />
      <MidPaneCard
        main_icon={<WiHumidity className="icon" />}
        main_title={"Humidity"}
        main_val={weatherData.main?.humidity + " %"}
        sub_icon={<AiFillCaretDown />}
        sub_value={"0,3"}
      />
      <hr />
    </div>
  );
}

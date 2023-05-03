import React from "react";
import "../styles/MiddlePane.css";
import NavBar from "./NavBar";
import { FaWind } from "react-icons/fa";
import { TbCloudRain, TbSun } from "react-icons/tb";
import { MdWaves } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import MidPaneCard from "./MidPaneCard";

export default function MiddlePane() {
  return (
    <div className="middle-pane">
      <NavBar />
      <hr />
      <MidPaneCard
        main_icon={<FaWind className="icon" />}
        main_title={"Wind Speed"}
        main_val={"12 km/h"}
        sub_icon={<AiFillCaretDown className="icon" />}
        sub_value={"2 km/h"}
      />
      <MidPaneCard
        main_icon={<TbCloudRain className="icon" />}
        main_title={"Rain chance"}
        main_val={"24 %"}
        sub_icon={<AiFillCaretUp className="icon" />}
        sub_value={"10 %"}
      />
      <MidPaneCard
        main_icon={<MdWaves className="icon" />}
        main_title={"Pressure"}
        main_val={"720 hpa"}
        sub_icon={<AiFillCaretUp className="icon" />}
        sub_value={"32 hpa"}
      />
      <MidPaneCard
        main_icon={<TbSun className="icon" />}
        main_title={"UV index"}
        main_val={"2,3"}
        sub_icon={<AiFillCaretDown className="icon" />}
        sub_value={"0,3"}
      />
    </div>
  );
}

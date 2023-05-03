import React from "react";
import { MdHomeFilled, MdMap, MdSavedSearch } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import PaneElement from "./PaneElement";
import "../styles/leftpane.css";

export default function LeftPane() {
  return (
    <div className="left-pane">
      <PaneElement
        icon={<MdHomeFilled className="icon" />}
        text={"Home"}
        link={"/"}
      />
      <PaneElement
        icon={<MdMap className="icon" />}
        text={"Map"}
        link={"/map"}
      />
      <PaneElement
        icon={<MdSavedSearch className="icon" />}
        text={"Saved Locations"}
        link={"/saved-locations"}
      />
      <PaneElement
        icon={<IoIosCalendar className="icon" />}
        text={"Calender"}
        link={"/calender"}
      />
    </div>
  );
}

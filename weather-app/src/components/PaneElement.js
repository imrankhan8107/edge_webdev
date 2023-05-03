import React from "react";
// import { Link } from "react-router-dom";
import "../styles/PaneElement.css";

export default function PaneElement({ icon, text, link }) {
  return (
    <div className="pane-element">
      {/* <Link to={link}> */}
      {icon}
      {text}
      {/* </Link> */}
    </div>
  );
}

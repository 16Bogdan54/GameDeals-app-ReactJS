import React from "react";
import "./controlPanel.css";

export default function ControlPanel(props) {
  return <aside className="control-panel">{props.children}</aside>;
}

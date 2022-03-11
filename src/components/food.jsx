import React from "react";
import CSS from "./food.module.css";

export default function Food({ position }) {
  const style = {
    left: `${position.left}%`,
    top: `${position.top}%`,
  };

  return <div className={CSS.food} style={style}></div>;
}

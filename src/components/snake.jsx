import React from "react";
import CSS from "./snake.module.css";

export default function Snake({ snakeDots }) {
  return snakeDots.map((dot) => {
    let style = {
      left: `${dot.left}%`,
      top: `${dot.top}%`,
    };
    return <div className={CSS.snake} style={style}></div>;
  });
}

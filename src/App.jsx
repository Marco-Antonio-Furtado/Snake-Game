import React, { useState, useEffect, useRef } from "react";
import style from "./App.module.css";
import Snake from "./components/snake";
import Food from "./components/food";

export default function App() {
  const gameArea = useRef();

  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    console.log(direction);
    gameArea.current.focus();
  }, [direction]);

  const [snakeDots, setSnakeDots] = useState([
    { left: 0, top: 0 },
    { left: 5, top: 0 },
    { left: 10, top: 0 },
  ]);

  function randomNumber() {
    const min = 0;
    const max = 100;
    const multiple = 5;
    const randomNumber =
      Math.floor((Math.random() * (max - min + 1) + min) / multiple) * multiple;
    return randomNumber;
  }

  const [position, setPosition] = useState({
    left: randomNumber(),
    top: randomNumber(),
  });

  function changeDirection(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection("UP");
        break;
      case 40:
        setDirection("DOWN");
        break;
      case 37:
        setDirection("LEFT");
        break;
      case 39:
        setDirection("RIGHT");
        break;
    }
  }

  return (
    <div
      className={style.gameArea}
      tabIndex="0"
      ref={gameArea}
      onKeyDown={(e) => {
        changeDirection(e);
      }}
    >
      <Snake snakeDots={snakeDots}></Snake>
      <Food position={position} />
    </div>
  );
}

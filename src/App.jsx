import React, { useState, useEffect, useRef } from "react";
import style from "./App.module.css";
import Snake from "./components/snake";
import Food from "./components/food";

export default function App() {
  const INITIAL_VALUE = [
    { left: 0, top: 0 },
    { left: 5, top: 0 },
    { left: 10, top: 0 },
  ];
  const gameArea = useRef();
  const [direction, setDirection] = useState("RIGHT");
  const [snakeDots, setSnakeDots] = useState(INITIAL_VALUE);
  const [foodPosition, setFoodPosition] = useState({
    left: randomNumber(),
    top: randomNumber(),
  });
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 200);

  useEffect(() => {
    gameArea.current.focus();
    moveSnake();
    checkIfEaten();
  }, [counter]);

  function randomNumber() {
    const min = 0;
    const max = 95;
    const multiple = 5;
    const randomNumber =
      Math.floor((Math.random() * (max - min + 1) + min) / multiple) * multiple;
    return randomNumber;
  }

  function changeDirection(e) {
    switch (e.keyCode) {
      case 37:
        if (direction !== "RIGHT") {
          setDirection("LEFT");
        }
        break;
      case 38:
        if (direction !== "DOWN") {
          setDirection("UP");
        }
        break;
      case 39:
        if (direction !== "LEFT") {
          setDirection("RIGHT");
        }
        break;
      case 40:
        if (direction !== "UP") {
          setDirection("DOWN");
        }
        break;
      default:
        setDirection("RIGHT");
        break;
    }
  }

  function gameOver() {
    let replay = window.confirm("Do you want to play again?");
    if (replay === true) {
      setSnakeDots(INITIAL_VALUE);
      setDirection("RIGHT");
    }
  }

  function moveSnake() {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "RIGHT":
        head = { left: head.left + 5, top: head.top };
        break;
      case "LEFT":
        head = { left: head.left - 5, top: head.top };
        break;
      case "DOWN":
        head = { left: head.left, top: head.top + 5 };
        break;
      case "UP":
        head = { left: head.left, top: head.top - 5 };
        break;
      default:
        head = { left: head.left + 5, top: head.top };
        break;
    }

    dots.push(head);
    dots.shift();
    setSnakeDots(dots);

    if (head.left < 0 || head.left > 95 || head.top < 0 || head.top > 95) {
      gameOver();
    }
  }

  function enlargeSnake() {
    let newSnake = snakeDots;
    newSnake.unshift({});
    setSnakeDots(newSnake);
  }

  function checkIfEaten() {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    if (head.left === foodPosition.left && head.top === foodPosition.top) {
      setFoodPosition({
        left: randomNumber(),
        top: randomNumber(),
      });
      enlargeSnake();
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
      <Food position={foodPosition} />
    </div>
  );
}

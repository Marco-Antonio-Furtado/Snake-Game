import React, { useState } from "react";
import style from "./App.module.css";
import Snake from "./components/snake";

function App() {
  const [snakeDots, setSnakeDots] = useState([
    { left: 0, top: 0 },
    { left: 5, top: 0 },
    { left: 10, top: 0 },
  ]);

  return (
    <div className={style.gameArea}>
      <Snake snakeDots={snakeDots}></Snake>
    </div>
  );
}

export default App;

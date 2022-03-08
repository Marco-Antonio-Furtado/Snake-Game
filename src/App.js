import style from "./App.module.css";

function App() {
  return (
    <div className={style.gameArea}>
      <div className={style.snake} style={{ top: 0, left: "5%" }}></div>
      <div className={style.snake} style={{ top: 0, left: "5%" }}></div>
      <div className={style.snake} style={{ top: 0, left: "20%" }}></div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Clock from "./compo/Clock.jsx";
import StudyTimer from "./compo/StudyTimer.jsx";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("clock"); // "clock" or "timer"

  return (
    <div className="app">
      <div className="top-bar">
        <button
          className={screen === "clock" ? "tab active" : "tab"}
          onClick={() => setScreen("clock")}
        >
          Clock
        </button>
        <button
          className={screen === "timer" ? "tab active" : "tab"}
          onClick={() => setScreen("timer")}
        >
          Study Timer
        </button>
      </div>

      <div className="screen">
        {screen === "clock" ? <Clock /> : <StudyTimer />}
      </div>
    </div>
  );
}

export default App;

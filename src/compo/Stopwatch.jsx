import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // ms
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time / 1000) % 60);
  const millis = Math.floor((time / 10) % 100);

  const format = (n) => n.toString().padStart(2, "0");

  return (
    <div className="time-display">
      {format(minutes)}:{format(seconds)}:{format(millis)}
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;

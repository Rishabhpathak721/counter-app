import React, { useState, useEffect } from "react";

function TimeCounter() {
    const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [pausedCount, setPausedCount] = useState(null);

  const handleStart = () => {
    if (intervalId === null) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setPausedCount(count);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(0);
    setPausedCount(null);
  };



  useEffect(() => {
    if (pausedCount !== null && intervalId === null) {
      setCount(pausedCount);
    }
  }, [pausedCount, intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="main">
      <div>
        <h1 style={{ color: "white", fontSize: "60px" }}>Time Counter</h1>
        <h1 style={{ color: "white", fontSize: "60px" }}>{count} Sec</h1>
        <div style={{ display: "flex", gap: "20px", margin: "50px" }}>
          <button
            style={{
              background: "green",
              width: "200px",
              border: "none",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={handleStart}
          >
            Start
          </button>
          <button  style={{
            background: "Red",
            width: "200px",
            border: "none",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }} onClick={handleStop}>Paused</button>
          <button
            style={{
              background: "yellow",
              width: "200px",
              border: "none",
              color: "black",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeCounter;

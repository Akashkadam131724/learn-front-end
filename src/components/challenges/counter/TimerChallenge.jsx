import { Divider, Typography, Button } from "antd";
import React, { useEffect, useState, useRef } from "react";

const TimerChallenge = () => {
  const [seconds, setSeconds] = useState(0); // Keep track of seconds
  const [isRunning, setIsRunning] = useState(false); // Track whether the timer is running
  const intervalRef = useRef(null); // Reference to store the interval ID

  // Function to calculate hours, minutes, and seconds
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  // Format the time for display
  const { hours, minutes, seconds: displaySeconds } = formatTime(seconds);

  return (
    <div>
      <TimerNormal />
      <Divider />
      <Typography.Title>Timer</Typography.Title>

      <Typography.Link>{`${hours}:${minutes}:${displaySeconds}`}</Typography.Link>
      <Divider />

      <div>
        <Button type="primary" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button onClick={resetTimer} style={{ marginLeft: 10 }}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TimerChallenge;

const TimerNormal = () => {
  const [seconds, setSeconds] = useState(0); // Keep track of seconds

  // Function to calculate hours, minutes, and seconds
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const incrementTime = () => {
    setSeconds((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementTime, 1000); // Increment every second
    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  const { hours, minutes, seconds: displaySeconds } = formatTime(seconds); // Format time

  return (
    <div>
      <Divider />
      <Typography.Title>Timer</Typography.Title>

      <Typography.Link>{`${hours}:${minutes}:${displaySeconds}`}</Typography.Link>
      <Divider />
    </div>
  );
};

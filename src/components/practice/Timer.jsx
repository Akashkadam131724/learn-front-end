import { Divider } from "antd";
import React, { useEffect, useRef, useState } from "react";

// ✅ When to use Timers in React
// Countdown timers

// Stopwatches

// Auto logout after inactivity

// Debouncing user input

// Polling APIs repeatedly

// If you want, I can give you:

// A simple React countdown timer

// A stopwatch with start/pause/reset

// Or a quiz timer example

const Timer = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Divider>Simple Time</Divider>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle && (
        <>
          <SimpleCounter />
          {/* <TimerWithLet /> */}
          {/* <TimerWithRef /> */}
        </>
      )}
    </div>
  );
};

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("running");
    const timerId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("return");

      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <Divider>Simple Time</Divider>

      <div>
        {count} <br />
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ++
        </button>
      </div>
    </div>
  );
};

const TimerWithLet = () => {
  const [count, setCount] = useState(0);
  let timerId; // ❌ THIS IS REDECLARED ON EVERY RENDER

  console.log("redeclaraing");

  useEffect(() => {
    console.log("usefffect:", timerId); // 💥 Will often be `undefined` or wrong
    // timerId = setInterval(() => {
    //   console.log("hey");
    //   setCount((prev) => prev + 1);
    // }, 1000);

    return () => {
      // console.log("Clearing: timer", timerId); // 💥 Will often be `undefined` or wrong
      // clearInterval(timerId);
      console.log("unmount");
    };
  }, []);

  const handleReset = () => {
    // console.log("Trying to clear:", timerId); // ❌ timerId is undefined or stale
    // clearInterval(timerId); // Does nothing!
    console.log("after button click,----------------------");

    setCount(count + 1);
  };

  return (
    <div>
      {console.log("renderd")}
      <Divider>Let Time</Divider>

      <p>Count: {count}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const TimerWithRef = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef(); // ✅ persists across renders

  useEffect(() => {
    console.log("usefffect:---"); // 💥 Will often be `undefined` or wrong

    timerId.current = setInterval(() => {
      console.log("timer is stil runnung");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Clearing:", timerId.current);
      clearInterval(timerId.current);
    };
  }, [count]);

  const handleReset = () => {
    console.log("Trying to clear:", timerId.current); // ✅ always correct
    clearInterval(timerId.current); // works!
    setCount(0);
  };

  return (
    <div>
      <Divider>Ref Time</Divider>

      <p>Count: {count}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

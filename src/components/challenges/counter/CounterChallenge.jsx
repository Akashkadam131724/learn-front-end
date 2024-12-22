import { useEffect, useState } from "react";

const CounterChallenge = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // setCounter(counter++);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1); // Use the previous state
    setCounter((prevCounter) => prevCounter + 1); // Use the previous state
  };

  const handleDecrement = () => {
    // setCounter(counter--);
    setCounter(counter - 1);
    // setCounter((prevCounter) => prevCounter - 1); // Use the previous state
  };

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>

        <hr></hr>
        <hr></hr>
      </div>
    </>
  );
};

export default CounterChallenge;

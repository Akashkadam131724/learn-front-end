import { useState } from "react";
const CounterWithConst = () => {
  const [count, setCount] = useState(0);

  function handleDec() {
    setCount((prev) => prev - 1);
  }

  function handleAsc() {
    // setCount(count++); //here we are modified declared count directly count = count + 1 will get error due to declared with count
    // setCount(++count); //here we are modified declared count dire
    //     1. count++ (Post-increment)
    // js
    // Copy
    // Edit
    // let temp = count;
    // count = count + 1;
    // return temp;
    // 2. ++count (Pre-increment)
    // js
    // Copy
    // Edit
    // count = count + 1;
    // return count;

    setCount(count + 1); // update increment count with old one only =>1
    setCount(count + 1); // update increment count with old one only =>1
    setCount((pre) => pre + 1); // // update increment count with latest updated one only 1=>2
  }

  return (
    <div>
      <h4>With Const</h4>
      <button onClick={handleDec}>Desc</button> {count}{" "}
      <button onClick={handleAsc}>Incr</button>
    </div>
  );
};

const CounterWithLet = () => {
  const [count, setCount] = useState(0);

  function handleDec() {
    setCount((prev) => prev - 1);
  }

  function handleAsc() {
    setCount(count + 1); //here we are modified declared count directly count = count + 1
    console.log(count);
  }

  return (
    <div>
      <h4>With Let</h4>
      <button onClick={handleDec}>Desc</button> {count}
      <button onClick={handleAsc}>Incr</button>
    </div>
  );
};

export { CounterWithConst, CounterWithLet };

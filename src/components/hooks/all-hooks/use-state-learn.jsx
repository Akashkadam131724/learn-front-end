import { useState } from "react";

const UseStateLearn = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <br></br>

      <button onClick={handleClick}>Click me {count}</button>
    </div>
  );
};

export default UseStateLearn;

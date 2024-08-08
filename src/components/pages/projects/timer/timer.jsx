import { useState } from "react";
function MyButton({ buttonProps: { count, handleClick } }) {
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
const Timer = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>

      <MyButton buttonProps={{ count, handleClick }} />
      <MyButton buttonProps={{ count, handleClick }} />
    </div>
  );
};

export default Timer;

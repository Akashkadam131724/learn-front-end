import { useEffect, useState } from "react";

const UseEffectLearn = () => {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    function sayHello() {
      console.log("called sayHello");
      setMessage(Math.floor(Math.random() * 10 + 1));
    }

    setInterval(sayHello, 2000);
  }, []);

  return (
    <div>
      <hr></hr>
      <br></br>
      {message}
      <br></br>
      <br></br>
      {/* <button onClick={handleClick}>update</button> */}
    </div>
  );
};

export default UseEffectLearn;

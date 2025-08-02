import { useState, useRef, useEffect } from "react";

const PassWordToggler = () => {
  const inputRef = useRef();
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    if (inputRef.current) {
      console.dir(inputRef.current);
      inputRef.current.type = isHidden ? "password" : "text";
    }
  }, [isHidden]);
  return (
    <div>
      <input type="password" ref={inputRef} />
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show pass" : "Hide pass"}
      </button>
    </div>
  );
};

export default PassWordToggler;

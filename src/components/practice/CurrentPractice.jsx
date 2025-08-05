import { useRef } from "react";

const CurrentPractice = () => {
  const ref = useRef();
  return (
    <div>
      <h1>Hey</h1>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          if (ref.current == 2) {
            console.log("hello");
            ref.current = 0;
          }
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CurrentPractice;

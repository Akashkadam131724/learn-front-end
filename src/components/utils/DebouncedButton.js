import { useRef } from "react";

function DebouncedButton({ onClick, children }) {
  const timeoutRef = useRef(null);
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

// use : <DebouncedButton
// onClick={() => alert('Lullaby sung!')}
// >
// Sing a lullaby
// </DebouncedButton>

export default DebouncedButton;

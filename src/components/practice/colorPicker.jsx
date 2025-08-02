const ColorPicker = () => {
  return (
    <div>
      <div style={{ backgroundColor: "" }}>hi</div>
      <input
        type="color"
        onChange={(e) => {
          console.log("onChange:", e.target.value);
        }}
        onInput={(e) => {
          console.log("onInput (live preview):", e.target.value);
        }}
        onFocus={() => {
          console.log("onFocus");
        }}
        onBlur={() => {
          console.log("onBlur");
        }}
        onClick={() => {
          console.log("onClick");
        }}
        onKeyDown={(e) => {
          console.log("onKeyDown:", e.key);
        }}
        onKeyUp={(e) => {
          console.log("onKeyUp:", e.key);
        }}
      />
    </div>
  );
};

export default ColorPicker;

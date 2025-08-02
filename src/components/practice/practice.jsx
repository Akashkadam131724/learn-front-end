import { Divider } from "antd";
import { CounterWithConst, CounterWithLet } from "./Counters";
import ToDoApp from "./todoApp";
import PassWordToggler from "./passWordToggler";
import ColorPicker from "./colorPicker";
import Faq from "./faq";
import ImageGallery from "./image-gallery";

const Practice = () => {
  return (
    <div>
      {/* <h1>Counter</h1>
      <Divider />
      <CounterWithConst />
      <CounterWithLet />
      <Divider />

      <ToDoApp />
      <Divider />
      <PassWordToggler />
      <Divider />
      <ColorPicker />
      <Divider />
      <Faq />
      <Divider /> */}
      <ImageGallery />
    </div>
  );
};

export default Practice;

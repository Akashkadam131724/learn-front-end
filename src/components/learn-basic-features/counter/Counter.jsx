import { useEffect, useState } from "react";
import { Button, Divider, Row } from "antd";
const Counter = () => {
  // // Get the count from localStorage on component mount
  // const storedCount = parseInt(localStorage.getItem("count")) || 0;
  // const [count, setCount] = useState(storedCount);

  // // Update localStorage when the count changes
  // useEffect(() => {
  //   localStorage.setItem("count", count.toString());
  // }, [count]);

  return (
    <Row justify={"center"}>
      {/* <Divider />
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button> */}
      
    </Row>
  );
};

export default Counter;

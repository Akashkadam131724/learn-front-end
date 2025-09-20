import { useReducer, useState } from "react";
import { Divider } from "antd";
const reducer = (state, action) => {
  if (action.style === "inc") {
    return state + 1 + action.num;
  }

  if (action.style === "dec") {
    return state - 1;
  }
};

const initialState = 0;

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Divider>Counter With Reducer</Divider>
      <h1>Count : {state}</h1>
      <button
        onClick={() => {
          dispatch({ style: "inc", num: 5 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("dec");
        }}
      >
        des
      </button>
      <Divider>Todo App with Reducer</Divider>
      <TodoListWithReducer />
    </div>
  );
};

export default HookUseReducer;

const reducerFun = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        data: [...state.data, action.newObj],
      };
    default:
      return state;
  }
};

const toDosState = {
  data: [],
};
const TodoListWithReducer = () => {
  const [state, dispatch] = useReducer(reducerFun, toDosState);
  const [inputVal, setInputVal] = useState("");

  const handleAdd = () => {
    dispatch({
      type: "add",
      newObj: {
        id: state.data.length + 1,
        name: inputVal,
      },
    });
  };

  console.log(state);
  return (
    <>
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

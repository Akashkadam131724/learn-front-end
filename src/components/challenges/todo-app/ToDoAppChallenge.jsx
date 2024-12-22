import { Divider } from "antd";
import { useMemo, useState } from "react";

const ToDoAppChallenge = () => {
  const [todos, setToDos] = useState(
    JSON.parse(localStorage.getItem("toDos")) ?? []
  );
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(localStorage.getItem("search") ?? "");
  const [selectedValue, setSelectedValue] = useState("");

  const handleAdd = () => {
    if (query.trim().length) {
      setToDos((prev) => {
        return [
          ...prev,
          {
            name: query,
            createdAt: Date.now(),
            id: Date.now().toLocaleString(),
            completed: false,
          },
        ];
      });
      setQuery("");
      localStorage.setItem("toDos", JSON.stringify(todos));
    } else {
      alert("please enter a value");
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter") {
      handleAdd();
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleDelete = (todo) => {
    const findTodo = todos.find((item) => item.id === todo.id);
    const filterToDo = todos.filter((todo) => todo.id !== findTodo.id);
    setToDos(filterToDo);
    localStorage.setItem("toDos", JSON.stringify(filterToDo));
  };

  const handleComplete = (e, todo) => {
    console.log(e.target.checked);
    const findTodo = todos.find((item) => item.id === todo.id);
    const updateCompleted = todos.map((todo) => {
      if (findTodo.id === todo.id) {
        return {
          ...todo,
          completed: e.target.checked,
        };
      }
      return todo;
    });
    setToDos(updateCompleted);
    localStorage.setItem("toDos", JSON.stringify(updateCompleted));
  };

  const handleQueryChangeTodo = (e, todo) => {
    const findTodo = todos.find((item) => item.id === todo.id);
    const updateToDo = todos.map((todo) => {
      if (findTodo.id === todo.id) {
        return {
          ...todo,
          name: e.target.value,
        };
      }
      return todo;
    });
    setToDos(updateToDo);
    localStorage.setItem("toDos", JSON.stringify(updateToDo));
  };

  const filterData = useMemo(() => {
    return todos.filter((item) => {
      if (search) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });
  }, [search, todos]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected Sort By:", event.target.value);
  };

  return (
    <div>
      {/* add to do  */}

      <div>
        <h4>Filters</h4>
        <div>
          By name :{" "}
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              localStorage.setItem("search", e.target.value);
            }}
          />
        </div>
        <div>
          sort By :{" "}
          <input
            type="radio"
            id="contactChoice1"
            name="sort"
            value="date"
            onChange={handleRadioChange}
            checked={selectedValue === "date"}
          />
          <label htmlFor="contactChoice1">Date</label>
          <input
            type="radio"
            id="contactChoice2"
            name="sort"
            value="name"
            onChange={handleRadioChange}
            checked={selectedValue === "name"}
          />
          <label htmlFor="contactChoice2">Name</label>
          <input
            type="radio"
            id="contactChoice3"
            name="sort"
            value="completed"
            onChange={handleRadioChange}
            checked={selectedValue === "completed"}
          />
          <label htmlFor="contactChoice2">Completed</label>
        </div>
      </div>
      <Divider />

      <div>
        <h4>Add</h4>
        <input
          type="text"
          placeholder="add your data"
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleOnKeyDown}
        />
        <button onClick={handleAdd}>Add to do </button>
      </div>

      <Divider />
      <div>
        <table>
          <tr>
            <th>name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {filterData.map((item) => {
            const { name, createdAt, id, completed } = item;

            return (
              <tr key={id}>
                <td>{name} </td>
                <td>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => {
                      handleComplete(e, item);
                    }}
                  />
                </td>

                <td>{new Date(createdAt).toUTCString()}</td>
                <td>
                  {" "}
                  <input
                    defaultValue={name}
                    onChange={(e) => {
                      handleQueryChangeTodo(e, item);
                    }}
                  />{" "}
                </td>
                <td>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ToDoAppChallenge;

import { Divider } from "antd";
import { useEffect, useRef, useState } from "react";

const ToDoApp = () => {
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState(() => {
    try {
      const stored =
        typeof window !== "undefined" ? localStorage.getItem("todos") : null;
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleAdd = () => {
    if (!query.trim().length) return;
    let newTodo = {
      id: todos.length + 1,
      name: query.trim(),
      contentEditable: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });

    setQuery("");
    inputRef.current.focus();
  };

  const handleTaskClick = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleEdit = (id, newName) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  useEffect(() => {
    if (todos.length === 0) {
      inputRef.current.focus();
    }
  }, [todos]);

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem("todos", JSON.stringify(todos));
      } catch {}
    }, 300); // adjust delay as needed

    return () => clearTimeout(handler);
  }, [todos]);

  return (
    <div>
      <TodoBatchTest />
      <Divider dashed />
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          console.log(query, "keyDown");
          if (e.code === "Enter") {
            handleAdd();
          }
        }}
      />{" "}
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos.map((item) => {
          return (
            <li key={item.id} style={{ margin: "10px" }}>
              {/* <span
                contentEditable={true}
                onInput={(e) => handleEdit(e, item.id)}
                style={{ padding: "8px" }}
              >
                {item.name}
              </span> */}
              <EditableItem item={item} onEdit={handleEdit} />

              <EditTodo todo={item} setTodos={setTodos} todos={todos} />

              <button
                data-id={item.id}
                style={{ marginLeft: "24px" }}
                onClick={() => handleTaskClick(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

const EditableItem = ({ item, onEdit }) => {
  const spanRef = useRef(null);

  const handleBlur = () => {
    const newValue = spanRef.current.innerText;
    onEdit(item.id, newValue);
  };

  return (
    <span
      contentEditable
      ref={spanRef}
      onBlur={handleBlur}
      suppressContentEditableWarning={true}
      style={{ padding: "8px" }}
    >
      {item.name}
    </span>
  );
};
const EditTodo = ({ todo, setTodos, todos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editQuery, setEditQuery] = useState("");
  const handleSave = () => {
    if (!editQuery.trim().length) return;
    setTodos(
      todos.map((orgTodo) => {
        if (todo.id === orgTodo.id) {
          return { ...orgTodo, name: editQuery };
        }
        return orgTodo;
      })
    );

    setIsEditing(false);
  };

  useEffect(() => {
    setEditQuery(todo.name);
  }, [todo.name]);
  return (
    <>
      {isEditing && (
        <input
          value={editQuery}
          onChange={(e) => {
            setEditQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSave();
            }
          }}
        />
      )}
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}
      {isEditing && (
        <>
          <button onClick={handleSave}>save</button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditQuery(todo.name);
            }}
          >
            cancel
          </button>
        </>
      )}
    </>
  );
};

export default ToDoApp;

const TodoBatchTest = () => {
  const [todos, setTodos] = useState([]);

  const addTodoUsingTodos = () => {
    // Using non-functional way
    setTimeout(() => {
      console.log("clicked");
      setTodos([...todos, { id: todos.length + 1, name: "Todo (bad)" }]);
    }, 100);
  };

  let click = 0;
  const addTodoUsingPrev = () => {
    // Using functional update
    console.log("clicked at", `${new Date().toUTCString()}`);
    setTimeout(() => {
      click = click + 1;

      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: `Todo (good) ${new Date().toUTCString()}`,
        },
      ]);

      // setTimeout(() => {
      //   click = click + 1;

      //   setTodos((prev) => [
      //     ...prev,
      //     {
      //       id: prev.length + 1,
      //       name: `Todo (good after 2 second) ${new Date().toUTCString()}`,
      //     },
      //   ]);
      // }, 3000);
    }, 1000);

    setTimeout(() => {
      click = click + 1;

      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: `Todo (good after 2 second) ${new Date().toUTCString()}`,
        },
      ]);
    }, 3000);
  };

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={addTodoUsingTodos}>Add (bad way)</button>
      <button onClick={addTodoUsingPrev}>Add (good way)</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

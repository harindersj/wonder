import React, { useState } from "react";
import TodoList from "./TodoList";
import "./todo.css";

const Todo = () => {
  const [value, setvalue] = useState("");
  const [todo, settodo] = useState([]);

  function upload(e) {
    e.preventDefault();
    if (value !== "") {
      settodo([...todo, value]);
    }
    setvalue("");
  }
  function deleteitem(indexdelete) {
    const fill = todo.filter((value, index) => {
      return index !== indexdelete;
    });
    settodo(fill);
    // console.log(fill);
  }

  return (
    <div>
      <form className="todo" onSubmit={upload}>
        <input
          onChange={(e) => setvalue(e.target.value)}
          value={value}
          autoFocus
          placeholder="Enter"
        ></input>
        <button type="submit">Insert</button>
      </form>
      <div className="todolist">
        {todo.map((value, index) => {
          return (
            <TodoList
              key={index}
              value={value}
              deleteitem={deleteitem}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

import React from "react";

const TodoList = (props) => {
  return (
    <button onClick={() => props.deleteitem(props.index)}>{props.value}</button>
  );
};

export default TodoList;

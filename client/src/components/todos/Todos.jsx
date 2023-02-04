import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList setTodo={setTodo} />
    </>
  );
};

export default Todos;

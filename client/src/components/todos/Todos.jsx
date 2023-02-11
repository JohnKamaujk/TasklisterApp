import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  // if (!auth._id) return navigate("/signin");

  useEffect(() => {
    if (!auth._id) return navigate("/signin");
  }, [auth._id, navigate]);

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList setTodo={setTodo} />
    </>
  );
};

export default Todos;

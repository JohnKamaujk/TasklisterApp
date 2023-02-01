import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodos } from "../../store/actions/todoActions";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  todosStyles: {
    margin: "20px auto",
    borderRadius: "9px",
    padding: "20px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <div className={classes.todosStyles}>
        <Typography variant="h5">
          {todos.length > 0 ? "MyTodos" : "NoTodos"}
        </Typography>
        {todos &&
          todos.map((todo) => {
            return <TodoItem todo={todo} key={todo._id} />;
          })}
      </div>
    </>
  );
};

export default TodoList;

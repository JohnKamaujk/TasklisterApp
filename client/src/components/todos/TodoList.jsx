import React from "react";
import { Typography } from "@material-ui/core";
import TodoItem from "./TodoItem";
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
  return (
    <>
      <div className={classes.todosStyles}>
        <Typography variant="h5">My Tasks</Typography>
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;

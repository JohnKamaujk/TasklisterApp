import React from "react";
import { Typography } from "@material-ui/core";
import TodoItem from "./TodoItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    todosStyles:{

    }
})

const TodoList = () => {
  return (
    <>
      <div>
        <Typography variant="h5">My Tasks</Typography>
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;

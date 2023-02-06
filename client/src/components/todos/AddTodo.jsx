import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
import { updateTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({
  formstyle: {
    margin: "0px auto",
    borderRadius: "9px",
    padding: "30px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddTodo = ({ setTodo, todo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid:todo.uid
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }
    setTodo({ name: "", isComplete: false });
  };
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className={classes.formstyle}
    >
      <TextField
        id="enter-task"
        variant="outlined"
        autoFocus
        fullWidth
        label="Enter Task here"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <Button
        className={classes.submitButton}
        type="submit"
        color="primary"
        variant="contained"
      >
        <Send />
      </Button>
    </form>
  );
};

export default AddTodo;

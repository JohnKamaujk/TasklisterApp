import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

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

const AddTodo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
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
        onChange={(e) =>
          setTodo({ ...todo, name: e.target.value, date: new Date() })
        }
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

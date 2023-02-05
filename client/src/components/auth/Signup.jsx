import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { signUp } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyles: {
    margin: "20px auto",
    borderRadius: "9px",
    padding: "20px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  textfieldStyle: {
    marginTop: "20px",
  },
  buttonStyle: {
    marginTop: "20px",
  },
});

const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp(user));

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;
  return (
    <>
      <form
        className={classes.formStyles}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">Sign Up</Typography>
        <TextField
          className={classes.textfieldStyle}
          id="enter-name"
          label="Enter name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          className={classes.textfieldStyle}
          id="enter-email"
          label="Enter email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className={classes.textfieldStyle}
          id="enter-password"
          label="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          className={classes.buttonStyle}
          type="submit"
          color="primary"
          variant="contained"
        >
          Sign up
        </Button>
      </form>
    </>
  );
};

export default Signup;

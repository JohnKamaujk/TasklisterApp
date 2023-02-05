import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";

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

const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(creds));

    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <form
      className={classes.formStyles}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4">Sign in</Typography>
      <TextField
        className={classes.textfieldStyle}
        id="enter-email"
        label="Enter email"
        variant="outlined"
        fullWidth
        value={creds.email}
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
      ></TextField>
      <TextField
        className={classes.textfieldStyle}
        id="enter-password"
        label="Enter password"
        type="password"
        variant="outlined"
        fullWidth
        value={creds.password}
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      ></TextField>
      <Button
        className={classes.buttonStyle}
        variant="contained"
        color="primary"
        type="submit"
      >
        SIGN IN
      </Button>
    </form>
  );
};

export default Signin;

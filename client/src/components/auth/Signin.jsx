import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
  return (
    <form className={classes.formStyles} noValidate autoComplete="off">
      <Typography variant="h4">Sign in</Typography>
      <TextField
        className={classes.textfieldStyle}
        id="enter-email"
        label="Enter email"
        variant="outlined"
        fullWidth
      ></TextField>
      <TextField
        className={classes.textfieldStyle}
        id="enter-password"
        label="Enter password"
        type="password"
        variant="outlined"
        fullWidth
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

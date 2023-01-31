import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "white",
    textDecoration: "none",
  },
  btnStyle: {
    color: "white",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignout = () => {
    // signout user

    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              Tasklister
            </Link>
          </Typography>
          <Typography variant="subtitle2" className={classes.root}>
            logged in as Johnny
          </Typography>
          <Button className={classes.btnStyle} onClick={handleSignout}>
            SignOut
          </Button>
          <Button className={classes.btnStyle} onClick={handleSignout}>
            <Link to="/signin" className={classes.linkStyle}>
              Signin
            </Link>
          </Button>
          <Button className={classes.btnStyle}>
            <Link to="/signup" className={classes.linkStyle}>
              Signup
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

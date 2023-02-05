import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Todos from "./components/todos/Todos";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar";
import { loadUser } from "./store/actions/authActions";

import { makeStyles } from "@material-ui/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Container maxWidth="md">
        <Navbar />
        <Container className={classes.contentStyle} maxWidth="sm">
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
      </Container>
    </>
  );
}

export default App;

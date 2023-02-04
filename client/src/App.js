import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/todos/Todos";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar";
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

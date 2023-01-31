import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/todos/Todos";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Navbar />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

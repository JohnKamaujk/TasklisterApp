const express = require("express");
const todos = require("./routes/todos");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to my node app...!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection established!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed!:", error.message);
  });

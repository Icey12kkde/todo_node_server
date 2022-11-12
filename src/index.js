const express = require("express");
const connect = require("./config/database");
const todoRoute = require("./router/todoRoutes");
const { json } = require("express");

connect();

const app = express();

app.use(json());
app.use("/todo", todoRoute);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Zuri Training on MongoDb");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const db = require("./server/util/database");
const todo = require("./server/modal/todo");

const todoRoute = require("./server/routes/todo");
const authRoute = require("./server/routes/auth");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(todoRoute);
app.use(authRoute);

const port = process.env.PORT || 5000;

db.sync()
  .then(result => {
    app.listen(port);
  })
  .catch(err => console.log(err));

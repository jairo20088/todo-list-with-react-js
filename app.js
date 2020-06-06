const express = require("express");
const db = require("./server/util/database");
const todo = require("./server/modal/todo");
const todoRoute = require("./server/routes/todo");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(todoRoute);

const port = process.env.PORT || 5000;

db.sync()
  .then(result => {
    app.listen(port);
  })
  .catch(err => console.log(err));

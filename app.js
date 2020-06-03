const express = require("express");
const db = require("./server/util/database");
const todo = require("./server/modal/todo");

const app = express();

app.use((req, res, next) => {
  todo.create({
    item: "jose mieses es el mejor"
  });
});

db.sync()
  .then(result => {
    app.listen(5000);
  })
  .catch(err => console.log(err));

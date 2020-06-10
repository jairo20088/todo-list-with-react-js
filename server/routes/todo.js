const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo");

route.get("/api/item", todoController.getItem);
route.post("/api", todoController.postItem);
route.delete("/item/delete", todoController.postDeleteItem);

module.exports = route;

const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo");

route.get("/api/item", todoController.getItem);
route.post("/api", todoController.postItem);

module.exports = route;

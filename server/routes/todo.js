const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo");

route.post("/api", todoController.postItem);
route.get("/api/item", todoController.getItem);

module.exports = route;

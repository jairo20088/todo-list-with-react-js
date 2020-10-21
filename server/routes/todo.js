const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo");
const isAuth = require("../middleware/isAuth");

route.get("/api/item", isAuth, todoController.getItem);
route.post("/add-item", isAuth, todoController.postItem);
route.delete("/item/delete", isAuth, todoController.postDeleteItem);
route.post("/item/done", isAuth, todoController.postItemDone);

module.exports = route;

const route = require("express").Router();
const controller = require("../controllers/todo");

route.get("/todos", controller.healthCheck);
route.post("/todos", controller.index);
route.get("/todos/:id", controller.detail);
route.delete("/add/todos", controller.add);

module.exports = route;

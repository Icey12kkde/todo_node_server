const router = require("express").Router();
const controller = require("../controller/todoController");

router
  .get("/", controller.getAllTodoTask)
  .post("/", controller.addTodoTask)
  .put("/:id", controller.updateTodoTask)
  .delete("/:id", controller.deleteTask);

module.exports = router;

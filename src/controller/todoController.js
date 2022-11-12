const Todo = require("../model/Todo");

//get all todo task

exports.getAllTodoTask = async (req, res) => {
  try {
    let todo = await Todo.find();
    if (todo.length === 0)
      return res.status(404).json({
        success: false,
        message: "No task were found",
      });
    res.status(200).json({
      success: true,
      message: "Task found",
      todo,
      count: todo.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Service Error",
      error: error.message,
    });
  }
};

// Add Todo task

exports.addTodoTask = async (req, res) => {
  try {
    let todo = await req.body;
    let created = await Todo.create(todo);
    if (!created)
      return res.status(400).json({
        success: false,
        message: "Task Addition failed",
      });
    return res.status(200).json({
      success: true,
      message: "Task created successfully",
      todo: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update a particular todo task

exports.updateTodoTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let todo = await req.body;
    let update = await Todo.findOneAndUpdate(id, todo, { new: true });
    if (!update)
      return res.status(400).json({
        success: false,
        message: "Task not updated",
      });

    return res.status(201).json({
      success: true,
      message: "Task updated",
      todo: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

// delete task

exports.deleteTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };

    let deleted = await Todo.findOneAndRemove(id);
    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Task not deleted",
      });

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

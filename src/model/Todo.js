const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

const userModel = model("todo", userSchema);

module.exports = userModel;

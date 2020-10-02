const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {
    type: String,
    enum: ["Leader", "Member", "Intern"],
    required: true,
  },
  creationDate: { type: Date, default: Date.now, required: true },
});

module.exports = User;

const User = require("../models/User");

const users = async () => {
  try {
    return User.find();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = users;

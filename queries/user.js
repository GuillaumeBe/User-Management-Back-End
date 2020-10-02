const User = require("../models/User");

const user = async (args) => {
  try {
    return User.findOne({ _id: args.id });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = user;

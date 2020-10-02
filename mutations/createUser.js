const User = require("../models/User");

const createUser = async (args) => {
  try {
    const user = new User({
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      role: args.role,
    });

    await user.save();

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = createUser;

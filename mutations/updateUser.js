const User = require("../models/User");

const updateUser = async (args) => {
  try {
    const previousUser = await User.findOne({ _id: args.id });

    let message;
    if (previousUser.role !== args.role)
      message =
        "Cet utilisateur est déjà dans une équipe, n'oubliez pas d'aller modifier l'équipe";

    const user = await User.findOneAndUpdate(
      { _id: args.id },
      {
        email: args.email,
        firstName: args.firstName,
        lastName: args.lastName,
        role: args.role,
      },
      { new: true }
    );
    return { user, message };
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = updateUser;

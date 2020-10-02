const Team = require("../models/Team");

const teams = async () => {
  try {
    return Team.find().populate("leader members intern");
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = teams;

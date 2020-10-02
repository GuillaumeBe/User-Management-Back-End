const Team = require("../models/Team");

const createTeam = async (args) => {
  try {
    const leaderInTeam = await Team.findOne({ leader: args.leader });

    if (leaderInTeam) {
      throw new Error("Cet utilisateur est déjà leader dans une team");
    }

    const team = new Team({
      name: args.name,
      leader: args.leader,
      members: args.members,
      intern: args.intern,
    });

    await team.save();

    return team;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = createTeam;

const Team = require("../models/Team");

const createTeam = async (args) => {
  try {
    const leaderInTeam = await Team.findOne({ leader: args.leader });

    if (leaderInTeam) {
      throw new Error("Cet utilisateur est déjà leader dans une team");
    }

    if (args.members.length > 2) {
      throw new Error("Une équipe peut contenir 2 membres au maximum");
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

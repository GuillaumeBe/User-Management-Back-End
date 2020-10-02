const mongoose = require("mongoose");

const Team = mongoose.model("Team", {
  name: {
    type: String,
    required: true,
  },
  leader: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  intern: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  creationDate: { type: Date, default: Date.now, required: true },
});

module.exports = Team;

const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");

const user = require("./queries/user");
const users = require("./queries/users");
const teams = require("./queries/teams");

const createUser = require("./mutations/createUser");
const updateUser = require("./mutations/updateUser");
const createTeam = require("./mutations/createTeam");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => console.log("DB connected"));

const resolvers = {
  Query: {
    user: async (parents, args) => user(args),
    users: async () => users(),
    teams: async () => teams(),
  },
  Mutation: {
    createUser: async (parents, args) => createUser(args),
    updateUser: async (parents, args) => updateUser(args),
    createTeam: async (parents, args) => createTeam(args),
  },
};

const server = new GraphQLServer({
  typeDefs: "./schemas.graphql",
  resolvers,
});

server.start(
  {
    port: process.env.PORT,
    cors: {
      credentials: true,
      origin: [
        process.env.ENV === "PRODUCTION"
          ? "https://trusting-lewin-546ba8.netlify.app"
          : process.env.ENV === "DEVELOPMENT" && "http://localhost:3000",
      ],
    },
  },
  () => {
    console.log("Server started");
  }
);

const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");

const options = require("./queries/options");
const user = require("./queries/user");
const users = require("./queries/users");
const teams = require("./queries/teams");

const createUser = require("./mutations/createUser");
const updateUser = require("./mutations/updateUser");
const createTeam = require("./mutations/createTeam");

mongoose.connect("mongodb://localhost/manage-users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => console.log("DB connected"));

const resolvers = {
  Query: {
    options: async () => options(),
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

server.start(() => {
  console.log("Server started");
});

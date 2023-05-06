const { mainCards, animals, categories } = require("./db");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");
const Mutation = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
    Mutation,
  },
  context: { mainCards, animals, categories },
});

server.listen().then(({ url }) => {
  console.log("listening on " + url);
});

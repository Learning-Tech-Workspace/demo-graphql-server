import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./_db.js";

// resolvers for each different type (Query, Mutation,...)
const resolvers = {
  Query: { // specify what data should be returned for each query
    reviews() {
      return db.reviews;
    },
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
  },
};

// setup server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`🚀 Server ready at ${url}`);

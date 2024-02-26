export const typeDefs = `#graphql
  type Game {
    id: ID!, # ! means this field is required
    title: String!,
    platform: [String!]!
  }

  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
  }

  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
  }

  # define the entry point of every GraphQL query
  type Query { 
    reviews: [Review],
    games: [Game],
    authors: [Author],
  }
`;

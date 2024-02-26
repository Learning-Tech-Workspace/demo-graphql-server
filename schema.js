export const typeDefs = `#graphql
  type Game {
    id: ID!, # ! means this field is required
    title: String!,
    platform: [String!]!
    reviews: [Review!], # relationship
  }

  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!, # relationship
    author: Author!, # relationship
  }

  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!], # relationship
  }

  # define the entry point of every GraphQL query
  type Query { 
    reviews: [Review],
    review(id: ID!): Review,
    games: [Game],
    game(id: ID!): Game,
    authors: [Author],
    author(id: ID!): Author,
  }
`;

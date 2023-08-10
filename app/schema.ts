const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
}

type Query {
    getUsers: [User]
}
`;

export default typeDefs;
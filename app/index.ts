import { GraphQLServer } from 'graphql-yoga'
// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema'
import resolvers from './resolver'

const options = {
    port: 4000,
    endpoint: '/graphql',
    playground: '/playground'
}
const server = new GraphQLServer({
    typeDefs,
    resolvers,
 }
)

server.start(options, ({ port }) => {
    console.log(`Server is running on ${port}`)
})
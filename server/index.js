const typeDefs = require('./schemas/schema');
const resolvers = require('./resolver/resolver');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
};

startApolloServer(typeDefs, resolvers);






const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Movie {
        id: ID
        name: String
        genre:String
    }

    type Query {
        movies: [Movie]
    }
`

module.exports = typeDefs;
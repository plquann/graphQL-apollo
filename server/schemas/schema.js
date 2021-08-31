const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Movie {
        id: ID
        name: String
        genre:String
        director : Director
    }

    type Director {
        id: ID!
        name: String
        age: Int
        movies: [Movie]
    }

    type Query {
        movies: [Movie]
        movie (id: ID!): Movie
        directors: [Director]
        director (id: ID!): Director
    }

    
`

module.exports = typeDefs;
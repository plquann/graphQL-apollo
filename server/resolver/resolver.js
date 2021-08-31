const { movies, directors } = require('../mocks/data');
const resolvers = {
    Query: {
        movies: () => movies,
        movie: (parent, args) => movies.find(movie => movie.id === +args.id),
        directors: () => directors,
        director: (parent, args) => directors.find(director => director.id == +args.id),
    },
    Movie: {
        director: (parent) => directors.find(director => director.id === parent.directorId),
    },
    Director: {
        movies: (parent) => movies.filter(movie => movie.directorId === parent.id),
    }
}

module.exports = resolvers;
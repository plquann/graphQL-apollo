const resolvers = {
    Query: {
        movies: () => [
            {
                id: 1,
                name: 'Harry Potter and the Chamber of Secrets',
                genre: 'Fantasy',
            },
            {
                id: 2,
                name: 'Jurassic Park',
                genre: 'Science Fiction',
            },
        ]
    }
}

module.exports = resolvers;
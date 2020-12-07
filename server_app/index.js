const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        bookId: Int,
        title: String,
        author: String
    }
    type Query {
        books:  [Book]
    }
`
const books = [
    {
        bookId: 111,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        bookId: 222,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
    {
        bookId: 333,
        title: 'The Road to learn React',
        author: 'Robin Wieruch'
    }
]

const resolvers = {
    Query: {
        books: () => {
            // write business logic here
          return books
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})
const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
        bookID: '111',
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        bookID: '222',
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
      books: () => books,
    },
  };

const typeDefs = gql`
    type Book {
        bookID: Int!
        title: String!
        author: String!
    }

    type Query {
        books: [Book]
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
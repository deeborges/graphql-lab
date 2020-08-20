const { ApolloServer, gql } = require("apollo-server");
const { fileLoader } = require('merge-graphql-schemas');
const path = require('path');

// toda request é POST
// toda request bate no mesmo endpoint (/graphql)

// query => obter informações GET
// mutation => manipular dados (POST/PUT/PATCH/DELETE)
// scalar types => string, int, boolean, float e ID




const typeDefs = gql`
  type User {
    _id: ID! # o idezão ajuda a identificar a chave primária desse usuário
    name: String! # a exclamacao indica que o atributo é obrigatório
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]! # a minha api pode retonar users com array vazio, mas não pode retornar null eo que ta dentro nao pode retornar null
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String, email: String): User
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: "Deyvison",
    email: "deyvisondev@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Bruno",
    email: "brunodev@gmail.com",
    active: true,
  },
];

// mapeamento de objetos um pra um
const resolvers = {
  Query: {
    hello: () => "start",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,
      };

      users.push(newUser)
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));

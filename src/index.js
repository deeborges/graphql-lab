import serverInit from './server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

serverInit({ typeDefs, resolvers });
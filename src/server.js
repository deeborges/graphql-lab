import { ApolloServer } from "apollo-server";
import Mongoose from "mongoose";

function serverInit({ typeDefs, resolvers }) {
	Mongoose.connect('mongodb://localhost:27017/graphql', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).finally(() => {
		console.log('...')
	});
	
	const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
}

export default serverInit;

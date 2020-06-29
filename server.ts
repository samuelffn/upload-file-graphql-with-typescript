import { ApolloServer, gql } from 'apollo-server';
import * as path from 'path';
import * as fs from 'fs';

const resolvers = {
  Mutation: {
      fileUpload: (_, args: any) => {
          console.log(args);
      },
  },
};

const content = fs.readFileSync(
  path.join(__dirname,  'schema.graphql'),
  'utf8',
);

const server = new ApolloServer({
  typeDefs: gql`
      ${content}
  `,
  resolvers,
});

server.listen({ port: 7411 }).then(({ url }) => {
  console.log(`Apollo GraphQL Server ready at ${url}`);
});

import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

export class GraphQLRoute {
    static map(app: express.Application): void {

        app.use('/graphql', (req: express.Request, res: express.Response) => {
            graphqlHTTP({
                schema,
                rootValue: root,
                graphiql: true,
              })(req, res);
        });
    }
}

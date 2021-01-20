import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";

export class GraphQLRoute {
  schema: GraphQLSchema;
  rootResolver: Record<string, unknown>;

  public buildContext({
    graphqlSchema,
    rootResolver,
  }: {
    graphqlSchema: GraphQLSchema;
    rootResolver: Record<string, unknown>;
  }): void {
    this.schema = graphqlSchema;
    this.rootResolver = rootResolver;
  }

  map(app: express.Application): void {
    app.use("/graphql", (req: express.Request, res: express.Response) => {
      graphqlHTTP({
        schema: this.schema,
        rootValue: this.rootResolver,
        graphiql: true,
      })(req, res);
    });
  }
}

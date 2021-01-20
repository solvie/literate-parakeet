import express from "express";
import { GraphQLSchema } from "graphql";

export default class AppContext {
  expressApp: express.Application;
  graphqlSchema: GraphQLSchema;
  rootResolver: Record<string, unknown>;
  port: number;

  constructor({
    expressApp,
    graphqlSchema,
    rootResolver,
    port,
  }: {
    expressApp: express.Application;
    graphqlSchema: GraphQLSchema;
    rootResolver: Record<string, unknown>;
    port: number;
  }) {
    this.expressApp = expressApp;
    this.graphqlSchema = graphqlSchema;
    this.rootResolver = rootResolver;
    this.port = port;
  }
}

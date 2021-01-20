import App from "./app";
import AppContext from "./app/context";
import express from "express";
import schema from "./graphql/schema/schema";
import resolver from "./graphql/resolvers/resolver";

const expressApp = express();
const appContext = new AppContext({
  port: 3000,
  rootResolver: resolver,
  graphqlSchema: schema,
  expressApp,
});

const app = new App(appContext);
app.setup();
app.start();

export default app.appContext.expressApp;

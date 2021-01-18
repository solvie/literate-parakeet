import express from 'express';
import { GraphQLRoute } from './routes/graphql-route';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

GraphQLRoute.map(app);

app.listen({ port: 4000 }, () =>
  // tslint:disable-next-line:no-console
  console.log('Now browse to http://localhost:4000' )
);
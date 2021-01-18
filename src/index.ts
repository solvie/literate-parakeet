import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen({ port: 4000 }, () =>
  // tslint:disable-next-line:no-console
  console.log('Now browse to http://localhost:4000' )
);
import * as express from 'express';

export class BasicRoutes {
    static map(app: express.Application): void {
        app.get("/", (req, res) => {
            res.send("Hello world!");
          });
    }
}
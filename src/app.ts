import express from 'express';
import { GraphQLRoute } from './routes/graphql-route';
import { BasicRoutes } from './routes/basic-routes';

export default class App {
    app : express.Application;

    constructor(expressApp: express.Application){
        this.app = expressApp;
    }

    setupRoutes(){
        GraphQLRoute.map(this.app);
        BasicRoutes.map(this.app);
    }

    start(){
        this.app.listen({ port: 4000 }, () =>
        // tslint:disable-next-line:no-console
        console.log('Now browse to http://localhost:4000' )
      );
    }
}
import { GraphQLRoute } from './routes/graphql-route';
import { BasicRoutes } from './routes/basic-routes';
import express from 'express';

export default class App {
    expressApp : express.Application;

    constructor(expressApp: express.Application){
        this.expressApp = expressApp;
    }

    setupRoutes(){
        GraphQLRoute.map(this.expressApp);
        BasicRoutes.map(this.expressApp);
    }

    start(){
        this.expressApp.listen({ port: 4000 }, () =>
        // tslint:disable-next-line:no-console
        console.log('Now browse to http://localhost:4000' )
      );
    }
}
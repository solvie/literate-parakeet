import { GraphQLRoute } from './routes/graphql-route';
import { BasicRoutes } from './routes/basic-routes';
import express from 'express';
import AppContext from './app/context';

export default class App {
    appContext : AppContext;

    constructor(appContext: AppContext){
        this.appContext = appContext;
    }

    public setup(){
        const graphqlRoute = new GraphQLRoute();
        graphqlRoute.buildContext(this.appContext);
        graphqlRoute.map(this.appContext.expressApp);
        BasicRoutes.map(this.appContext.expressApp);
    }

    start(){
        const port = this.appContext.port
        this.appContext.expressApp.listen({ port }, () =>
            // tslint:disable-next-line:no-console
            console.log('Now browse to http://localhost:'+ port )
        );
    }
}
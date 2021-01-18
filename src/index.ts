import App from './app';
import express from 'express';

const expressApp = express();

const app = new App(expressApp);

app.setupRoutes();
app.start();

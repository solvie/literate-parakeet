import App from './app';
import express from 'express';

const app = new App(express());
app.setupRoutes();
app.start();

export default app.expressApp;

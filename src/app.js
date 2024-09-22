import express from 'express';
import routes from './router/routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class App {
  constructor() {
    this.server = express();

    mongoose
      .connect(
        `mongodb+srv://heltonbritopa:${process.env.DB_CONNECTION}puK4@house-horse.iql5e.mongodb.net/`,
      )
      .then(() => console.log('Connected!'))
      .catch((error) => console.error('Connection error:', error));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

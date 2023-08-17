import express, { Application, Request, Response } from 'express';
import * as path from 'path';
import MongoDBConnection from './app/database/models/mongoConnection';
import mongoose, { connect, set } from 'mongoose';
import UserRoutes from './app/api/user/user.routes';

class App {
  private app: Application;
  private port: string | number;
  private dbConnection: MongoDBConnection;
  private userRoutes = new UserRoutes();
  mongoURI =
    'mongodb+srv://cccmongodb:ccc1_mongodb@cc-cluster.tyb3i.mongodb.net/nx_ng_ex_monorepo'; // Update with your MongoDB URI
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;

    this.connectToDatabase();
    this.startServer();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares() {
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
  }

  private configureRoutes() {
    // this.app.use('/api/user', this._userRoutes.router);
    this.app.get('/api', (req: Request, res: Response) => {
      res.send({ message: 'Welcome to backend!' });
    });
    // Mount the UserRoutes router here
    this.app.use('/api', this.userRoutes.router);
  }

  private startServer() {
    const server = this.app.listen(this.port, () => {
      console.log(`Listening at http://localhost:${this.port}/api`);
    });

    server.on('error', console.error);
  }

  private async connectToDatabase() {
    try {
      await mongoose.connect(this.mongoURI, {});
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

const appInstance = new App();

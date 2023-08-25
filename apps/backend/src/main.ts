import express, { Application, Request, Response } from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import MongoDbConnection from './app/database/models/mongoConnection';
import UserRoutes from './app/api/user/user.routes';
import env from './environment';
class App {
  private app: Application;
  private PORT = env.getPort();
  private MONGO_URL = env.getMongoUrl();
  private dbConnection: MongoDbConnection;
  private userRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.basicConfig();
    this.configureMiddlewares();
    this.configureRoutes();
    this.connectToDatabase();
    this.startServer();
  }

  private basicConfig() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private configureMiddlewares() {
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
  }

  private configureRoutes() {
    this.app.get('/api', (req: Request, res: Response) => {
      res.send({ message: 'Welcome to backend!' });
    });
    // Mount the UserRoutes router here
    this.app.use('/api', this.userRoutes.router);
  }

  private async connectToDatabase() {
    this.dbConnection = new MongoDbConnection();
    await this.dbConnection.connect(this.MONGO_URL);
  }

  private startServer() {
    const server = this.app.listen(this.PORT, () => {
      console.log(`Listening at http://localhost:${this.PORT}/api`);
    });

    server.on('error', console.error);
  }
}

const appInstance = new App();

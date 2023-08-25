import { Router } from 'express';
import UserController from './user.controller';
class UserRoutes {
  public router = Router();
  public controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/users', this.controller.getUsers);
    this.router.post('/users', this.controller.createUser);
    this.router.delete('/users', this.controller.deleteUser);
    this.router.put('/users', this.controller.updateUser);
  }
}

export default UserRoutes;

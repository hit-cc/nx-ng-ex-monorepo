import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  public UserService = new UserService();
  constructor() {
    console.log('UserController call');
  }
  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      this.UserService._createUser(req.body)
        .then((response) => {
          return res.status(200).json({ data: response });
        })
        .catch((error) => {
          next(error);
          return res.status(500).json({ message: error });
        });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error });
    }
  };

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    console.log('called getUsers');
    try {
      this.UserService._getUserList()
        .then((response) => {
          return res.status(200).json({ data: response });
        })
        .catch((err) => {
          next(err);
          return res.status(500).json({ error: err });
        });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error });
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      this.UserService._updateUser(req.body)
        .then((response) => {
          return res.status(200).json({ data: response });
        })
        .catch((err) => {
          next(err);
          return res.status(500).json({ error: err });
        });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error });
    }
  };

  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      this.UserService._deleteUser(req.body)
        .then((response) => {
          return res.status(200).json({ data: response });
        })
        .catch((err) => {
          next(err);
          return res.status(500).json({ error: err });
        });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error });
    }
  };
}

export default UserController;

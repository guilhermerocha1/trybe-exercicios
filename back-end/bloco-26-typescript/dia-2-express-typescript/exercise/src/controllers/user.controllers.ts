import { Response, Request } from 'express';
import UserService from '../services/user.services';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const user = await this.userService.getAll();
    res.status(200).json(user);
  }
};

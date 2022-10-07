import UserModel from '../models/user.models';
import User from '../interface/user.interface';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel; 

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const result = this.model.getAll();
    return result;
  }
}

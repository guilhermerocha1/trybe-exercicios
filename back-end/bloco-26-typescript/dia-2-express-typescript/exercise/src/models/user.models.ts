import { Pool } from 'mysql2/promise';
import User from '../interface/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users');
    return result[0] as User[];
  }
};


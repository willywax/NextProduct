/* eslint-disable no-useless-catch */
import database from '../database/models';

class UserService {
  static async createUser(user) {
    try {
      return await database.Users.create(user);
    } catch (error) {
      throw error;
    }
  }

  static async userCount(email) {
    try {
      return await database.Users.count({
        where: [{ email }],
      });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;

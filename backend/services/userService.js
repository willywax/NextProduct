/* eslint-disable no-useless-catch */
import database from '../database/models';

const { Users } = database;
class UserService {
  static async createUser(user) {
    try {
      return await Users.create(user);
    } catch (error) {
      throw error;
    }
  }

  static async userCount(email) {
    try {
      return await Users.count({
        where: [{ email }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getUser(email) {
    try {
      const user = await Users.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;

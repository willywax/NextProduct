import generatePassword from '../utils/generatePassword';
import userService from '../services/userService';
import generateToken from '../utils/generateToken';


const _ = require('lodash');

class Users {
  static async createUser(req, res) {
    const rawData = _.pick(req.body, ['firstName', 'lastName', 'email',
      'password']);

    const details = await userService.userCount(rawData.email);
    if (details) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'user already exists',
      });
    }
    // generate a hashed password
    const newPassword = await generatePassword(rawData, userService.userCount(rawData.email));
    // update data
    rawData.password = newPassword;
    const token = await generateToken(rawData.id, rawData.email);
    const data = await userService.createUser(rawData);
    return res.status(201).send({
      status: res.statusCode,
      message: 'Account has been created successfully',
      token,
      data: _.pick(data, ['userid', 'first_name', 'last_name', 'email']),
    });
  }
}

export default Users;

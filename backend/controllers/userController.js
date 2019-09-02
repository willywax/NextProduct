import Password from '../utils/generatePassword';
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
    const newPassword = await Password.generatePassword(rawData, userService.userCount(rawData.email));
    // update data
    rawData.password = newPassword;
    const data = await userService.createUser(rawData);
    const token = await generateToken(data.id, data.email);
    data.token = token;
    return res.status(201).send({
      status: res.statusCode,
      message: 'Account has been created successfully',
      data: _.pick(data, ['token', 'id', 'firstName', 'lastName', 'email']),
    });
  }

  static async signin(req, res) {
    // getting the credentials
    const { email, password } = _.pick(req.body, ['email', 'password']);

    // checking if the user exist
    const userExist = await userService.getUser(email);
    // in case the user does not exist
    if (!userExist) {
      return res.status(404).send({
        status: res.statusCode,
        message: 'user not found',
      });
    }
    // check whether the password match
    const user = { ...userExist.dataValues };
    const hashedPassword = user.password;
    const match = await Password.checkPasswordMatch(hashedPassword, password);
    // in case the password mismatch
    if (!match) {
      return res.status(400).send({ status: res.statusCode, message: 'password is incorrect' });
    }
  // otherwise
    const { id } = user;
    const token = generateToken(id, email);
    delete user.password;
    const data = { token, ...user };
    return res.status(200).send({ status: res.statusCode, data });
  }
}

export default Users;

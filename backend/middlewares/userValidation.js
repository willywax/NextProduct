import Joi from '@hapi/joi';

class validation {
  static async validateUser(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email()
        .required()
        .error(() => 'Enter a valid email. E.g: jonathanaurugai12@gmail.com'),
      firstName: Joi.string().alphanum().min(3).max(30)
        .required()
        .error(() => 'Enter a valid first name. E.g: Jonathan'),
      lastName: Joi.string().alphanum().min(3).max(30)
        .required()
        .error(() => 'Enter a valid last name. E.g: Aurugai'),
      password: Joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).error(() => 'Enter a valid password with atleast 8 characters, a capital letter and a number'),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.details[0].message,
        });
      } else {
        next();
      }
    });
  }

  // signinvalidations
  static async validateSignin(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().trim().required(),
      password: Joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).error(() => 'Enter a valid password with atleast 8 characters, a capital letter and a number'),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.details[0].message,
        });
      } else {
        next();
      }
    });
  }
}


export default validation;
